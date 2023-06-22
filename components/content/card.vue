<script setup lang="tsx">
import { defineComponent } from "vue";
</script>

<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
    <slot />
  </div>
</template>

<script lang="tsx">
export const CardHeader = defineComponent({
  setup(_, context) {
    return () => (
      <div class="flex flex-col space-y-1.5 p-6">
        {context.slots.default?.()}
      </div>
    );
  },
});

export const CardTitle = defineComponent({
  setup(_, context) {
    return () => (
      <h3 class="text-lg font-semibold leading-none tracking-tight">
        {context.slots.default?.()}
      </h3>
    );
  },
});

export const CardDescription = defineComponent({
  setup(_, context) {
    return () => (
      <p class="text-sm text-muted-foreground">{context.slots.default?.()}</p>
    );
  },
});

export const CardContent = defineComponent({
  setup(_, context) {
    return () => <div class="p-6 pt-0">{context.slots.default?.()}</div>;
  },
});

export const CardFooter = defineComponent({
  setup(_, context) {
    return () => (
      <div class="flex items-center p-6 pt-0">{context.slots.default?.()}</div>
    );
  },
});
</script>

