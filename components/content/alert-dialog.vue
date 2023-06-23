<script setup lang="ts">
import { computed, watch } from "vue";
import * as dialog from "@zag-js/dialog";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { ButtonVariant } from "~/components/button.vue";

const [state, send] = useMachine(
  dialog.machine({ id: "alert-dialog", role: "alertdialog" })
);
const api = computed(() => dialog.connect(state.value, send, normalizeProps));

const props = defineProps<{
  open?: boolean;
  variant?: ButtonVariant;
}>();

const emit = defineEmits<{
  openChange: [open: boolean];
  confirm: [];
}>();

watch(
  () => api.value.isOpen,
  (value) => {
    emit("openChange", value);
  }
);

const open = () => {
  api.value.open();
};

const close = () => {
  api.value.close();
};

watch(
  () => props.open,
  (value) => {
    value ? open() : close();
  }
);

const onConfirm = () => {
  api.value.close();
  emit("confirm");
};

defineExpose({
  open,
  close,
});
</script>

<template>
  <slot name="trigger-button" :trigger-props="api.triggerProps">
    <Button v-bind="api.triggerProps">
      <slot name="trigger-content">Open Dialog</slot>
    </Button>
  </slot>
  <Teleport to="body">
    <Transition
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      enter-active-class="transition-opacity duration-200 ease-out"
      leave-active-class="transition-opacity duration-150  ease-in"
    >
      <div
        class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        v-bind="api.backdropProps"
        v-if="api.isOpen"
      />
    </Transition>
    <Transition
      enter-from-class="sm:opacity-0 sm:scale-90 translate-y-full sm:translate-y-0"
      leave-to-class="sm:opacity-0 sm:scale-90 translate-y-full sm:translate-y-0"
      enter-active-class="transition duration-200 ease-out"
      leave-active-class="transition duration-150  ease-in"
    >
      <div
        class="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
        v-bind="api.containerProps"
        v-if="api.isOpen"
      >
        <div
          class="fixed z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg md:w-full"
          v-bind="api.contentProps"
        >
          <div
            v-if="$slots.title || $slots.description"
            class="flex flex-col space-y-2 text-center sm:text-left"
          >
            <h2
              v-if="$slots.title"
              v-bind="api.titleProps"
              class="text-lg font-medium leading-6 text-gray-900"
            >
              <slot name="title" />
            </h2>
            <p
              v-if="$slots.description"
              v-bind="api.descriptionProps"
              class="text-sm text-muted-foreground"
            >
              <slot name="description" />
            </p>
          </div>
          <div
            v-if="$slots['cancel-button'] || $slots['confirm-button']"
            class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
          >
            <Button
              v-bind="api.closeTriggerProps"
              v-if="$slots['cancel-button']"
              variant="outline"
              class="mt-2 sm:mt-0"
            >
              <slot name="cancel-button" />
            </Button>
            <Button
              :variant="variant"
              v-if="$slots['confirm-button']"
              @click="onConfirm"
            >
              <slot name="confirm-button" />
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

