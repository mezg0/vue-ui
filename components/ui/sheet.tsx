import {
  computed,
  provide,
  watch,
  defineComponent,
  Transition,
  Teleport,
} from "vue";
import * as dialog from "@zag-js/dialog";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { Button } from "~/components/ui/button";
import { renderAsChild } from "~/lib/utils";

const sheetInjectionKey = Symbol() as InjectionKey<
  ComputedRef<ReturnType<typeof dialog.connect>>
>;
const useDialogContext = () => {
  const api = inject(sheetInjectionKey);

  if (!api) {
    throw new Error("The root context was not found for the sheet.");
  }

  return api;
};

type SheetInstance = InstanceType<typeof Sheet> & {
  open: () => void;
  close: () => void;
};

const Sheet = defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    openChange: (value: boolean) => true,
  },
  setup(props, { emit, slots, expose }) {
    const [state, send] = useMachine(
      dialog.machine({ id: "alert-dialog", role: "alertdialog" })
    );
    const api = computed(() =>
      dialog.connect(state.value, send, normalizeProps)
    );

    provide(sheetInjectionKey, api);

    watch(
      () => api.value.isOpen,
      (value) => {
        emit("openChange", value);
      }
    );

    watch(
      () => props.isOpen,
      (value) => {
        if (value) {
          api.value.open();
        } else {
          api.value.close();
        }
      }
    );

    expose({
      open: api.value.open,
      close: api.value.close,
    });

    return () => <div>{slots.default?.()}</div>;
  },
});

const SheetTrigger = defineComponent({
  props: {
    asChild: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, attrs }) {
    const api = useDialogContext();

    return () =>
      props.asChild ? (
        renderAsChild(slots, { ...api.value.triggerProps, ...attrs })
      ) : (
        <Button {...api.value.triggerProps}>{slots.default?.()}</Button>
      );
  },
});

const SheetContent = defineComponent({
  setup(_, context) {
    const api = useDialogContext();

    return () => (
      <Teleport to="body">
        <Transition
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
          enter-active-class="transition-opacity duration-150 ease-out"
          leave-active-class="transition-opacity duration-100 ease-in"
        >
          {api.value.isOpen && (
            <div
              {...api.value.backdropProps}
              class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />
          )}
        </Transition>

        <Transition
          enter-from-class="sm:opacity-0 sm:scale-90 translate-y-full sm:translate-y-0"
          leave-to-class="sm:opacity-0 sm:scale-90 translate-y-full sm:translate-y-0"
          enter-active-class="transition duration-200 sm:duration-150 ease-out"
          leave-active-class="transition duration-150 sm:duration-100 ease-in"
        >
          {api.value.isOpen && (
            <div
              {...api.value.containerProps}
              class="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
            >
              <div
                {...api.value.contentProps}
                class="fixed z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg md:w-full"
              >
                {context.slots.default?.()}
              </div>
            </div>
          )}
        </Transition>
      </Teleport>
    );
  },
});

export { Sheet, SheetTrigger, SheetContent };

