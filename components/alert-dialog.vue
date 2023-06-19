<script setup lang="tsx">
import { computed, provide } from "vue";
import * as dialog from "@zag-js/dialog";
import { normalizeProps, useMachine } from "@zag-js/vue";

const [state, send] = useMachine(
  dialog.machine({ id: "1", role: "alertdialog" })
);
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

const alertDialogInjectionKey = Symbol() as InjectionKey<
  ComputedRef<ReturnType<typeof dialog.connect>>
>;

export const AlertDialogTrigger = defineComponent(
  (props: { variant?: ButtonVariant }, context) => {
    const api = inject(alertDialogInjectionKey);

    if (!api) {
      throw new Error("The root context was not found for the alert dialog");
    }

    return () => (
      <Button variant={props.variant ?? "default"} {...api.value.triggerProps}>
        {context.slots.default?.()}
      </Button>
    );
  }
);

export const AlertDialogContent = defineComponent((_, context) => {
  const api = inject(alertDialogInjectionKey);

  if (!api) {
    throw new Error("The root context was not found for the alert dialog");
  }

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
        enter-from-class="opacity-0 md:scale-90 translate-y-full md:translate-y-0"
        leave-to-class="opacity-0 md:scale-90 translate-y-full md:translate-y-0"
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
});

export const AlertDialogHeader = defineComponent((_, context) => {
  return () => (
    <div class="flex flex-col space-y-2 text-center sm:text-left">
      {context.slots.default?.()}
    </div>
  );
});

const useDialogApi = () => {
  const api = inject(alertDialogInjectionKey);

  if (!api) {
    throw new Error("The root context was not found for the alert dialog.");
  }

  return api;
};

export const AlertDialogTitle = defineComponent((_, context) => {
  const api = useDialogApi();
  return () => (
    <h2
      class="text-lg font-medium leading-6 text-gray-900"
      {...api.value.titleProps}
    >
      {context.slots.default?.()}
    </h2>
  );
});

export const AlertDialogDescription = defineComponent((_, context) => {
  const api = useDialogApi();
  return () => (
    <p class="text-sm text-muted-foreground" {...api.value.descriptionProps}>
      {context.slots.default?.()}
    </p>
  );
});

export const AlertDialogFooter = defineComponent((_, context) => {
  return () => (
    <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
      {context.slots.default?.()}
    </div>
  );
});

export const AlertDialogCancel = defineComponent((_, context) => {
  const api = useDialogApi();

  return () => (
    <Button variant="secondary" {...api.value.closeTriggerProps}>
      {context.slots.default?.()}
    </Button>
  );
});

export const AlertDialogAction = defineComponent(
  (props: { variant?: ButtonVariant; closeDialog?: boolean }, context) => {
    const api = useDialogApi();

    const handleClick = () => {
      if (props.closeDialog) {
        api.value.close();
      }
    };
    return () => (
      <Button variant={props.variant ?? "default"} onClick={handleClick}>
        {context.slots.default?.()}
      </Button>
    );
  },
  {
    props: {
      closeDialog: {
        type: Boolean,
        default: true,
      },
      variant: {
        default: "default",
      },
    },
  }
);
</script>

