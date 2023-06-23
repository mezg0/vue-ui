import { VariantProps, cva } from "class-variance-authority";
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";

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

const Button = defineComponent({
  props: {
    variant: {
      type: String as PropType<VariantProps<typeof buttonVariants>["variant"]>,
    },
    size: {
      type: String as PropType<VariantProps<typeof buttonVariants>["size"]>,
    },
  },
  setup({ variant, size }, { slots, attrs }) {
    return () => (
      <button
        {...attrs}
        class={cn(buttonVariants({ variant, size }), attrs.class ?? "")}
      >
        {slots.default?.()}
      </button>
    );
  },
});

export { Button };

