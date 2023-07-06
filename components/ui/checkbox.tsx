import {
  Checkbox as CheckboxPrimitive,
  CheckboxControl,
  CheckboxInput,
  CheckboxLabel as CheckboxLabelPrimitive,
  CheckboxProps,
} from "@ark-ui/vue";
import { ExtendProps, cn } from "~/lib/utils";
import { CheckIcon } from "lucide-vue-next";
import { defineComponent, h } from "vue";

const Check = defineComponent({
  setup() {
    return () => h(CheckIcon, { class: "w-4 h-4" });
  },
});

const Checkbox = defineComponent({
  props: {} as ExtendProps<CheckboxProps>,
  setup(_, { attrs, slots }) {
    return () => (
      <CheckboxPrimitive
        class={cn("flex gap-2 items-center", attrs ?? " ")}
        {...attrs}
      >
        {({ isChecked }: { isChecked: boolean }) => (
          <>
            <CheckboxControl class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-primary data-[checked]:text-primary-foreground">
              {isChecked && (
                <span class="flex items-center justify-center text-current">
                  <Check />
                </span>
              )}
            </CheckboxControl>
            {slots.default?.()}
            <CheckboxInput />
          </>
        )}
      </CheckboxPrimitive>
    );
  },
});

const CheckboxLabel = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <CheckboxLabelPrimitive
        class={cn("peer-data-[disabled]:opacity-70", attrs.class ?? "")}
      >
        {slots.default?.()}
      </CheckboxLabelPrimitive>
    );
  },
});

export { Checkbox, CheckboxLabel };

