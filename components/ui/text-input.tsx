import { ExtendProps } from "lib/utils";
import { ExtractPropTypes } from "nuxt/dist/app/compat/capi";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { defineComponent } from "vue";

const Description = defineComponent({
  setup(_, { slots }) {
    return () => (
      <p class="text-sm text-muted-foreground">{slots.default?.()}</p>
    );
  },
});

const ErrorMessage = defineComponent({
  setup(_, { slots }) {
    return () => <p class="text-sm text-destructive">{slots.default?.()}</p>;
  },
});

type InputProps = InstanceType<typeof Input>["$props"];

const props = {
  modelValue: {
    type: String,
  },
  description: {
    type: String,
  },
  errorMessage: {
    type: String,
  },
  label: {
    type: String,
  },
};
type TextInputProps = ExtendProps<InputProps & ExtractPropTypes<typeof props>>;

const TextInput = defineComponent({
  props: props as unknown as TextInputProps,
  emits: {
    "update:modelValue": (value: string) => true,
  },
  setup({ label, description, errorMessage, modelValue }, { attrs, emit }) {
    const needsWrapper = label || description || errorMessage;

    const InputComponent = () => (
      <Input
        {...attrs}
        value={modelValue || attrs.value}
        onUpdate:modelValue={(val) => emit("update:modelValue", val)}
        class={errorMessage && "ring-destructive"}
      />
    );

    if (needsWrapper) {
      return () => (
        <div class="space-y-2">
          {label && <Label>{label}</Label>}
          {description && <Description>{description}</Description>}
          <InputComponent />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
      );
    }

    return InputComponent;
  },
});

export { TextInput };

