import {
  Select as SelectPrimitive,
  SelectContent as SelectContentPrimitive,
  SelectOption as SelectOptionPrimitive,
  SelectPositioner,
  SelectTrigger as SelectTriggerPrimitive,
  SelectLabel as SelectLabelPrimitive,
  SelectProps,
} from "@ark-ui/vue";

import { cn, ExtendProps } from "~/lib/utils";

import {
  defineComponent,
  onMounted,
  ref,
  computed,
  Teleport,
  InjectionKey,
  ComputedRef,
  provide,
  inject,
  h,
  PropType,
} from "vue";
import { CheckIcon, ChevronDown } from "lucide-vue-next";
import { labelClasses } from "~/components/ui/label";

const Check = defineComponent({
  setup() {
    return () =>
      h(CheckIcon, {
        class: "w-4 h-4",
      });
  },
});

const Chevron = defineComponent({
  setup() {
    return () =>
      h(ChevronDown, {
        class: "w-4 h-4 ml-auto",
      });
  },
});

const selectedOptionKey = Symbol() as InjectionKey<
  ComputedRef<
    | {
        value: string;
        label: string;
      }
    | undefined
  >
>;

const SelectContext = defineComponent({
  props: {
    selectedOption: {
      type: Object as PropType<{
        value: string;
        label: string;
      }>,
    },
  },
  setup(props, { slots }) {
    provide(
      selectedOptionKey,
      computed(() => props.selectedOption)
    );

    return () => slots.default?.();
  },
});

const Select = defineComponent({
  props: {} as ExtendProps<SelectProps>,
  setup(_, { slots, emit }) {
    const key = ref("ssr");
    onMounted(() => {
      key.value = "csr";
    });

    return () => (
      <SelectPrimitive key={key.value}>
        {({
          selectedOption,
        }: {
          selectedOption?: { value: string; label: string };
        }) => (
          <SelectContext selectedOption={selectedOption}>
            <div class="grid gap-2">{slots.default?.()}</div>
          </SelectContext>
        )}
      </SelectPrimitive>
    );
  },
});

const SelectTrigger = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <SelectTriggerPrimitive>
        <button
          class={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            attrs.class ?? ""
          )}
        >
          {slots.default?.()}
          <Chevron />
        </button>
      </SelectTriggerPrimitive>
    );
  },
});

const SelectValue = defineComponent({
  props: {
    placeholder: {
      type: String,
      default: "Select an option",
    },
  },
  setup({ placeholder }) {
    const selectedOption = inject(selectedOptionKey);

    return () => (
      <div>
        {selectedOption?.value ? selectedOption.value.label : placeholder}
      </div>
    );
  },
});

const SelectContent = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <Teleport to="body">
        <SelectPositioner>
          <SelectContentPrimitive
            class={cn(
              "z-50 min-w-[8rem] focus:outline-none overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md w-[var(--reference-width)]",
              attrs.class ?? ""
            )}
          >
            {slots.default?.()}
          </SelectContentPrimitive>
        </SelectPositioner>
      </Teleport>
    );
  },
});

const SelectOption = defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup(props, { attrs }) {
    const selectedOption = inject(selectedOptionKey);
    const isSelected = computed(
      () => selectedOption?.value?.value === props.value
    );

    return () => (
      <SelectOptionPrimitive
        value={props.value}
        class={cn(
          "relative flex justify-between w-full cursor-default select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none data-[focus]:bg-accent data-[focus]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          attrs.class ?? ""
        )}
        label={props.label}
      >
        {props.label}
        {isSelected.value && (
          <span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
            <Check />
          </span>
        )}
      </SelectOptionPrimitive>
    );
  },
});

const SelectLabel = defineComponent({
  setup(_, { slots, attrs }) {
    return () => {
      return (
        <SelectLabelPrimitive class={cn(labelClasses, attrs.class ?? "")}>
          {slots.default?.()}
        </SelectLabelPrimitive>
      );
    };
  },
});

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectOption,
  SelectLabel,
};

