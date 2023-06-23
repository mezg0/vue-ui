import { defineComponent } from "vue";
import { cn } from "~/lib/utils";

const Card = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <div
        class={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </div>
    );
  },
});

const CardHeader = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <div class={cn("flex flex-col space-y-1.5 p-6", attrs.class ?? "")}>
        {slots.default?.()}
      </div>
    );
  },
});

const CardTitle = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <h3
        class={cn(
          "text-2xl font-semibold leading-none tracking-tight",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </h3>
    );
  },
});

const CardDescription = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <p class={cn("text-sm text-muted-foreground", attrs.class ?? "")}>
        {slots.default?.()}
      </p>
    );
  },
});

const CardContent = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <div class={cn("p-6 pt-0", attrs.class ?? "")}>{slots.default?.()}</div>
    );
  },
});

const CardFooter = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <div class={cn("flex items-center p-6 pt-0", attrs.class ?? "")}>
        {slots.default?.()}
      </div>
    );
  },
});

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};

