import {
  Popover as PopoverPrimitive,
  PopoverContent as PopoverContentPrimitive,
  PopoverPositioner,
  PopoverTrigger,
  PopoverProps,
} from "@ark-ui/vue";
import { ExtendProps, cn } from "~/lib/utils";
import { defineComponent, onMounted, ref } from "vue";

const Popover = defineComponent({
  props: {} as ExtendProps<PopoverProps>,
  setup(_, { slots }) {
    const key = ref("ssr");
    onMounted(() => {
      key.value = "csr";
    });
    return () => (
      <PopoverPrimitive key={key.value}>{slots.default?.()}</PopoverPrimitive>
    );
  },
});

const PopoverContent = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <PopoverPositioner class="z-10">
        <PopoverContentPrimitive
          class={cn(
            "z-50 w-72 rounded-lg border bg-popover p-4 text-popover-foreground shadow-md outline-none",
            attrs.class ?? ""
          )}
        >
          {slots.default?.()}
        </PopoverContentPrimitive>
      </PopoverPositioner>
    );
  },
});

export { Popover, PopoverContent, PopoverTrigger };

