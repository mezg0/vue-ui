import { cn } from "~/lib/utils";

const Label = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <label
        class={cn("block font-medium text-sm text-gray-700", attrs.class ?? "")}
      >
        {slots.default?.()}
      </label>
    );
  },
});

export { Label };

