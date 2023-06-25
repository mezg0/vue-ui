import {
  provide,
  defineComponent,
  Transition,
  Teleport,
  ComputedRef,
  InjectionKey,
} from "vue";
import { Button } from "~/components/ui/button";
import { cn, renderAsChild } from "~/lib/utils";
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@ark-ui/vue";

const isOpenKey = Symbol() as InjectionKey<ComputedRef<boolean>>;

const AlertDialogContext = defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    provide(
      isOpenKey,
      computed(() => props.isOpen)
    );
    return () => slots.default?.();
  },
});

const AlertDialog = defineComponent({
  setup(_, { slots }) {
    return () => (
      <Dialog>
        {({ isOpen }: { isOpen: boolean }) => (
          <AlertDialogContext isOpen={isOpen}>
            {slots.default?.()}
          </AlertDialogContext>
        )}
      </Dialog>
    );
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
    return () => (
      <DialogTrigger>
        {props.asChild ? (
          renderAsChild(slots, { ...attrs })
        ) : (
          <Button {...attrs}>{slots.default?.()}</Button>
        )}
      </DialogTrigger>
    );
  },
});

const AlertDialogContent = defineComponent({
  setup(_, context) {
    const isOpen = inject(isOpenKey);

    return () => (
      <Teleport to="body">
        <Transition
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
          enter-active-class="transition-opacity duration-150 ease-out"
          leave-active-class="transition-opacity duration-100 ease-in"
        >
          {isOpen?.value && (
            <DialogBackdrop class="fixed inset-0 z-50 bg-background/90" />
          )}
        </Transition>

        <DialogContainer class="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <Transition
            enter-from-class="sm:opacity-0 sm:scale-90 translate-y-full sm:translate-y-0"
            leave-to-class="sm:opacity-0 sm:scale-90 translate-y-full sm:translate-y-0"
            enter-active-class="transition duration-200 sm:duration-150 ease-out"
            leave-active-class="transition duration-150 sm:duration-100 ease-in"
          >
            {isOpen?.value && (
              <DialogContent class="fixed z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg md:w-full">
                {context.slots.default?.()}
              </DialogContent>
            )}
          </Transition>
        </DialogContainer>
      </Teleport>
    );
  },
});

const AlertDialogHeader = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <div
        class={cn(
          "flex flex-col space-y-2 text-center sm:text-left",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </div>
    );
  },
});

const AlertDialogTitle = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <DialogTitle class={cn("text-lg font-semibold", attrs.class ?? "")}>
        {slots.default?.()}
      </DialogTitle>
    );
  },
});

const AlertDialogDescription = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <DialogDescription
        class={cn("text-sm text-muted-foreground", attrs ?? "")}
      >
        {slots.default?.()}
      </DialogDescription>
    );
  },
});

const AlertDialogFooter = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <div
        class={cn(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
          attrs ?? ""
        )}
      >
        {slots.default?.()}
      </div>
    );
  },
});

const AlertDialogCancel = defineComponent({
  setup(_, context) {
    return () => (
      <DialogCloseTrigger>
        <Button variant="secondary" class="mt-2 sm:mt-0">
          {context.slots.default?.()}
        </Button>
      </DialogCloseTrigger>
    );
  },
});

const AlertDialogAction = defineComponent({
  props: {
    asChild: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
      default: () => {},
    },
  },
  setup(props, { slots, attrs }) {
    return () => (
      <DialogCloseTrigger>
        {props.asChild ? (
          renderAsChild(slots, { ...attrs })
        ) : (
          <Button onClick={props.onClick}>{slots.default?.()}</Button>
        )}
      </DialogCloseTrigger>
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

