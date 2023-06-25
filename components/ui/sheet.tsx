import {
  provide,
  defineComponent,
  Transition,
  Teleport,
  ComputedRef,
  InjectionKey,
  PropType,
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
import { VariantProps, cva } from "class-variance-authority";

const isOpenKey = Symbol() as InjectionKey<ComputedRef<boolean>>;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b",
        bottom: "inset-x-0 bottom-0 border-t",
        left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

const SheetContext = defineComponent({
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

const Sheet = defineComponent({
  setup(_, { slots }) {
    return () => (
      <Dialog>
        {({ isOpen }: { isOpen: boolean }) => (
          <SheetContext isOpen={isOpen}>{slots.default?.()}</SheetContext>
        )}
      </Dialog>
    );
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

const SheetContent = defineComponent({
  props: {
    side: {
      type: String as PropType<VariantProps<typeof sheetVariants>["side"]>,
    },
  },
  setup({ side }, context) {
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
              <DialogContent class={sheetVariants({ side })}>
                {context.slots.default?.()}
              </DialogContent>
            )}
          </Transition>
        </DialogContainer>
      </Teleport>
    );
  },
});

const SheetHeader = defineComponent({
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

const SheetTitle = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <DialogTitle
        class={cn("text-lg font-semibold text-foreground", attrs.class ?? "")}
      >
        {slots.default?.()}
      </DialogTitle>
    );
  },
});

const SheetDescription = defineComponent({
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

const SheetFooter = defineComponent({
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

const SheetCancel = defineComponent({
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

const SheetAction = defineComponent({
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
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetAction,
  SheetCancel,
};

