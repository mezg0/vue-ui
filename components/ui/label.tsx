import { cn } from "~/lib/utils";

const Label = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <label
        class={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </label>
    );
  },
});

export { Label };

