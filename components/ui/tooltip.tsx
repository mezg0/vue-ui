import {
  Tooltip as TooltipPrimitive,
  TooltipContent as TooltipContentPrimitive,
  TooltipPositioner,
  TooltipTrigger,
  TooltipProps,
} from "@ark-ui/vue";
import { ExtendProps } from "~/lib/utils";
import { defineComponent, onMounted, ref, Transition } from "vue";

const Tooltip = defineComponent({
  props: {} as ExtendProps<TooltipProps>,
  setup(props, { slots }) {
    const key = ref("ssr");
    onMounted(() => {
      key.value = "csr";
    });
    return () => (
      <TooltipPrimitive key={key.value} {...props}>
        {slots.default?.()}
      </TooltipPrimitive>
    );
  },
});

const TooltipContent = defineComponent({
  setup(_, { slots }) {
    return () => (
      <Transition
        enter-active-class="transition-opacity"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity"
        leave-to-class="opacity-0"
      >
        <TooltipPositioner>
          <TooltipContentPrimitive class="z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md">
            {slots.default?.()}
          </TooltipContentPrimitive>
        </TooltipPositioner>
      </Transition>
    );
  },
});

export { Tooltip, TooltipTrigger, TooltipContent };

