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

const alertDialogInjectionKey = Symbol() as InjectionKey<
  ComputedRef<ReturnType<typeof dialog.connect>>
>;
const useDialogContext = () => {
  const api = inject(alertDialogInjectionKey);

  if (!api) {
    throw new Error("The root context was not found for the alert dialog.");
  }

  return api;
};

const AlertDialog = defineComponent({
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit, slots }) {
    const [state, send] = useMachine(
      dialog.machine({ id: "alert-dialog", role: "alertdialog" })
    );
    const api = computed(() =>
      dialog.connect(state.value, send, normalizeProps)
    );

    provide(alertDialogInjectionKey, api);

    watch(
      () => api.value.isOpen,
      (value) => {
        emit("openChange", value);
      }
    );

    watch(
      () => props.open,
      (value) => {
        if (value) {
          api.value.open();
        } else {
          api.value.close();
        }
      }
    );

    return () => <div>{slots.default?.()}</div>;
  },
});

const AlertDialogTrigger = defineComponent({
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

const AlertDialogContent = defineComponent({
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
          enter-from-class="md:opacity-0 md:scale-90 translate-y-full md:translate-y-0"
          leave-to-class="md:opacity-0 md:scale-90 translate-y-full md:translate-y-0"
          enter-active-class="transition duration-200 md:duration-150 ease-out"
          leave-active-class="transition duration-150 md:duration-100 ease-in"
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

const AlertDialogHeader = defineComponent({
  setup(_, context) {
    return () => (
      <div class="flex flex-col space-y-2 text-center sm:text-left">
        {context.slots.default?.()}
      </div>
    );
  },
});

const AlertDialogTitle = defineComponent({
  setup(_, context) {
    const api = useDialogContext();
    return () => (
      <h2
        class="text-lg font-medium leading-6 text-gray-900"
        {...api.value.titleProps}
      >
        {context.slots.default?.()}
      </h2>
    );
  },
});

const AlertDialogDescription = defineComponent({
  setup(_, context) {
    const api = useDialogContext();
    return () => (
      <p class="text-sm text-muted-foreground" {...api.value.descriptionProps}>
        {context.slots.default?.()}
      </p>
    );
  },
});

const AlertDialogFooter = defineComponent({
  setup(_, context) {
    return () => (
      <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        {context.slots.default?.()}
      </div>
    );
  },
});

const AlertDialogCancel = defineComponent({
  setup(_, context) {
    const api = useDialogContext();

    return () => (
      <Button
        class="mt-2 sm:mt-0"
        variant="secondary"
        {...api.value.closeTriggerProps}
      >
        {context.slots.default?.()}
      </Button>
    );
  },
});

const AlertDialogAction = defineComponent({
  props: {
    closeDialog: {
      type: Boolean,
      default: true,
    },
    asChild: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, attrs }) {
    const api = useDialogContext();
    return () =>
      props.asChild ? (
        renderAsChild(slots, { ...api.value.closeTriggerProps, ...attrs })
      ) : (
        <Button {...attrs} {...api.value.closeTriggerProps}>
          {slots.default?.()}
        </Button>
      );
  },
});

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
};

