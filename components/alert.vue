<script lang="tsx" setup>
import { VariantProps, cva } from "class-variance-authority";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

withDefaults(
  defineProps<{
    variant?: VariantProps<typeof alertVariants>["variant"];
  }>(),
  {
    variant: "default",
  }
);
</script>

<template>
  <div role="alert" :class="alertVariants({ variant })">
    <slot />
  </div>
</template>

<script lang="tsx">
export const AlertTitle = defineComponent({
  setup(_, context) {
    return () => (
      <h3 class="mb-1 font-medium leading-none tracking-tight">
        {context.slots.default?.()}
      </h3>
    );
  },
});

export const AlertDescription = defineComponent({
  setup(_, context) {
    return () => (
      <p class="text-sm [&_p]:leading-relaxed">{context.slots.default?.()}</p>
    );
  },
});
</script>

