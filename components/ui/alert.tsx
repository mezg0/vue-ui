import { defineComponent } from "vue";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

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

const Alert = defineComponent({
  props: {
    variant: {
      type: String as PropType<VariantProps<typeof alertVariants>["variant"]>,
      default: "default",
    },
  },
  setup({ variant }, { slots, attrs }) {
    return () => (
      <div class={cn(alertVariants({ variant }), attrs.class ?? "")}>
        {slots.default?.()}
      </div>
    );
  },
});

const AlertTitle = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <h3
        class={cn(
          "mb-1 font-medium leading-none tracking-tight",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </h3>
    );
  },
});

const AlertDescription = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <p class={cn("text-sm [&_p]:leading-relaxed", attrs.class ?? "")}>
        {slots.default?.()}
      </p>
    );
  },
});

export { Alert, AlertTitle, AlertDescription };

