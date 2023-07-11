import { cn, ExtendProps } from "~/lib/utils";
import { defineComponent, InputHTMLAttributes } from "vue";

type InputProps = ExtendProps<
  InputHTMLAttributes & {
    modelValue?: string;
  }
>;

const Input = defineComponent({
  props: {
    modelValue: {
      type: String,
    },
  } as unknown as InputProps,
  emits: {
    "update:modelValue": (value: string) => true,
  },
  setup(props, { emit, attrs }) {
    return () => (
      <input
        {...attrs}
        value={props.modelValue || attrs.value}
        onInput={(e) =>
          emit("update:modelValue", (e.target as HTMLInputElement)?.value)
        }
        class={cn(
          "flex h-10 w-full shadow rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          attrs.class ?? ""
        )}
      />
    );
  },
});

export { Input };

