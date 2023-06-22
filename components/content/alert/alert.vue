<script lang="tsx" setup>
import { VariantProps, cva } from "class-variance-authority";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground [&>svg]:text-foreground",
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
    <h3
      v-if="$slots.title"
      class="mb-1 font-medium leading-none tracking-tight"
    >
      <slot name="title" />
    </h3>
    <p v-if="$slots.description" class="text-sm [&_p]:leading-relaxed">
      <slot name="description" />
    </p>
  </div>
</template>

