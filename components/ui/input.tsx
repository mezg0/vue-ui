import { cn } from "~/lib/utils";
import { defineComponent } from "vue";

export const inputClasses =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const Input = defineComponent({
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: {
    "update:modelValue": (value: string) => true,
  },
  setup(props, { emit, attrs }) {
    return () => (
      <input
        class={cn(inputClasses, attrs.class ?? "")}
        value={props.modelValue}
        onInput={(e) =>
          emit("update:modelValue", (e.target as HTMLInputElement)?.value)
        }
      />
    );
  },
});

export { Input };

