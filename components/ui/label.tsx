import { cn } from "~/lib/utils";
import { defineComponent } from "vue";

export const labelClasses =
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

const Label = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <label class={cn(labelClasses, attrs.class ?? "")}>
        {slots.default?.()}
      </label>
    );
  },
});

export { Label };

