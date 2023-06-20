<script setup lang="tsx">
import { computed, provide } from "vue";
import * as dialog from "@zag-js/dialog";
import { normalizeProps, useMachine } from "@zag-js/vue";

const [state, send] = useMachine(dialog.machine({ id: "1" }));
const api = computed(() => dialog.connect(state.value, send, normalizeProps));

provide(alertDialogInjectionKey, api);

const props = defineProps<{
  open?: boolean;
}>();

const emit = defineEmits<{
  openChange: [open: boolean];
}>();

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
</script>

<template>
  <slot />
</template>

<script lang="tsx">
import type { InjectionKey } from "vue";
import Button, { ButtonVariant } from "~/components/button.vue";
import { Teleport, Transition } from "vue";
import { VariantProps, cva } from "class-variance-authority";
import { X } from "lucide-vue-next";
import { XIcon } from "lucide-vue-next";

const alertDialogInjectionKey = Symbol() as InjectionKey<
  ComputedRef<ReturnType<typeof dialog.connect>>
>;

const portalVariants = cva("fixed inset-0 z-50 flex", {
  variants: {
    position: {
      top: "items-start",
      bottom: "items-end",
      left: "justify-start",
      right: "justify-end",
    },
  },
  defaultVariants: { position: "right" },
});

const sheetVariants = cva(
  "fixed z-50 scale-100 gap-4 bg-background p-6 opacity-100 shadow-lg border",
  {
    variants: {
      position: {
        top: "animate-in slide-in-from-top w-full duration-300",
        bottom: "animate-in slide-in-from-bottom w-full duration-300",
        left: "animate-in slide-in-from-left h-full duration-300",
        right: "animate-in slide-in-from-right h-full duration-300",
      },
      size: {
        content: "",
        default: "",
        sm: "",
        lg: "",
        xl: "",
        full: "",
      },
    },
    compoundVariants: [
      {
        position: ["top", "bottom"],
        size: "content",
        class: "max-h-screen",
      },
      {
        position: ["top", "bottom"],
        size: "default",
        class: "h-1/3",
      },
      {
        position: ["top", "bottom"],
        size: "sm",
        class: "h-1/4",
      },
      {
        position: ["top", "bottom"],
        size: "lg",
        class: "h-1/2",
      },
      {
        position: ["top", "bottom"],
        size: "xl",
        class: "h-5/6",
      },
      {
        position: ["top", "bottom"],
        size: "full",
        class: "h-screen",
      },
      {
        position: ["right", "left"],
        size: "content",
        class: "max-w-screen",
      },
      {
        position: ["right", "left"],
        size: "default",
        class: "w-1/3",
      },
      {
        position: ["right", "left"],
        size: "sm",
        class: "w-1/4",
      },
      {
        position: ["right", "left"],
        size: "lg",
        class: "w-1/2",
      },
      {
        position: ["right", "left"],
        size: "xl",
        class: "w-5/6",
      },
      {
        position: ["right", "left"],
        size: "full",
        class: "w-screen",
      },
    ],
    defaultVariants: {
      position: "right",
      size: "default",
    },
  }
);

const useDialogApi = () => {
  const api = inject(alertDialogInjectionKey);

  if (!api) {
    throw new Error("The root context was not found for the alert dialog.");
  }

  return api;
};

export const SheetTrigger = defineComponent({
  props: {
    variant: {
      type: String as PropType<ButtonVariant>,
      default: "default",
    },
    asChild: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const api = useDialogApi();

    return () =>
      props.asChild ? (
        context.slots.default?.(api.value.triggerProps)
      ) : (
        <Button
          variant={props.variant ?? "default"}
          {...api.value.triggerProps}
        >
          {context.slots.default?.()}
        </Button>
      );
  },
});

export const SheetClose = defineComponent({
  props: {
    variant: {
      type: String as PropType<ButtonVariant>,
      default: "default",
    },
    asChild: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const api = useDialogApi();

    return () =>
      props.asChild ? (
        context.slots.default?.(api.value.closeTriggerProps)
      ) : (
        <Button
          variant={props.variant ?? "default"}
          {...api.value.closeTriggerProps}
        >
          {context.slots.default?.()}
        </Button>
      );
  },
});

export const SheetContent = defineComponent({
  props: {
    position: {
      type: String as PropType<VariantProps<typeof portalVariants>["position"]>,
      default: "right",
    },
    size: {
      type: String as PropType<VariantProps<typeof sheetVariants>["size"]>,
      default: "default",
    },
  },
  setup(props, context) {
    const api = useDialogApi();

    const translateClass = () => {
      switch (props.position) {
        case "top":
          return "-translate-y-full";
        case "bottom":
          return "translate-y-full";
        case "left":
          return "-translate-x-full";
        case "right":
          return "translate-x-full";
      }
    };

    return () => (
      <Teleport to="body">
        <Transition
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
          enter-active-class="transition-opacity duration-200 ease-out"
          leave-active-class="transition-opacity duration-150 ease-in"
        >
          {api.value.isOpen && (
            <div
              {...api.value.backdropProps}
              class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />
          )}
        </Transition>

        <Transition
          enter-from-class={`${translateClass()}`}
          leave-to-class={`${translateClass()}`}
          enter-active-class="transition duration-200 ease-out"
          leave-active-class="transition duration-150 ease-in"
        >
          {api.value.isOpen && (
            <div
              {...api.value.containerProps}
              class={portalVariants({ position: props.position })}
            >
              <div
                {...api.value.contentProps}
                class={`${sheetVariants({
                  position: props.position,
                  size: props.size,
                })} relative`}
              >
                <button
                  class="absolute top-4 right-4"
                  {...api.value.closeTriggerProps}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4"
                  >
                    <line x1="18" x2="6" y1="6" y2="18"></line>
                    <line x1="6" x2="18" y1="6" y2="18"></line>
                  </svg>
                </button>
                {context.slots.default?.()}
              </div>
            </div>
          )}
        </Transition>
      </Teleport>
    );
  },
});

export const SheetHeader = defineComponent({
  setup(_, context) {
    return () => (
      <div class="flex flex-col space-y-2 text-center sm:text-left">
        {context.slots.default?.()}
      </div>
    );
  },
});

export const SheetTitle = defineComponent({
  setup(_, context) {
    const api = useDialogApi();
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

export const SheetDescription = defineComponent({
  setup(_, context) {
    const api = useDialogApi();
    return () => (
      <p class="text-sm text-muted-foreground" {...api.value.descriptionProps}>
        {context.slots.default?.()}
      </p>
    );
  },
});

export const SheetFooter = defineComponent({
  setup(_, context) {
    return () => (
      <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        {context.slots.default?.()}
      </div>
    );
  },
});
</script>

