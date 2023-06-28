import {
  Popover as PopoverPrimitive,
  PopoverContent as PopoverContentPrimitive,
  PopoverPositioner,
  PopoverTrigger,
  PopoverProps,
} from "@ark-ui/vue";
import { ExtendProps, cn } from "~/lib/utils";
import { PropType } from "vue";

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
      <PopoverPositioner>
        <PopoverContentPrimitive
          class={cn(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            attrs.class ?? ""
          )}
        >
          {slots.default?.()}
        </PopoverContentPrimitive>
      </PopoverPositioner>
    );
  },
});

export { Popover, PopoverContent, PopoverPositioner, PopoverTrigger };

