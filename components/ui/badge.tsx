import { VariantProps, cva } from "class-variance-authority";
import { cn } from "~/lib/utils";
import { defineComponent, PropType } from "vue";
export const badgeVariants = cva(
  "inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
        secondary:
          "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive:
          "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = defineComponent({
  props: {
    variant: {
      type: String as PropType<VariantProps<typeof badgeVariants>["variant"]>,
    },
  },
  setup({ variant }, { slots, attrs }) {
    return () => (
      <div class={cn(badgeVariants({ variant }), attrs.class ?? "")}>
        {slots.default?.()}
      </div>
    );
  },
});

export { Badge };

