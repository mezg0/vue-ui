<script lang="ts">
export const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        round: "rounded-full h-10 w-10 py-0 px-0",
        xs: "h-6 py-1 px-2 rounded-md",
        default: "h-10 py-2 px-4 rounded-md",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants>;
export type ButtonVariant = ButtonProps["variant"];
</script>

<script lang="ts" setup>
import { cva, type VariantProps } from "class-variance-authority";

withDefaults(
  defineProps<{
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
    onClick?: CallableFunction;
  }>(),
  {
    variant: "default",
    size: "default",
    onClick: () => {},
  }
);
</script>

<template>
  <button
    :class="buttonVariants({ variant, size })"
    @click="(e) => onClick && onClick(e)"
  >
    <slot />
  </button>
</template>

