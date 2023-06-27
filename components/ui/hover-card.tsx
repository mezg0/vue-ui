import {
  HoverCard as HoverCardPrimitive,
  HoverCardContent as HoverCardContentPrimitive,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@ark-ui/vue";
import { cn } from "~/lib/utils";
import { defineComponent, Teleport, onMounted, ref } from "vue";

const HoverCard = defineComponent({
  setup(_, { slots }) {
    const key = ref("ssr");
    onMounted(() => {
      key.value = "csr";
    });
    return () => (
      <HoverCardPrimitive key={key.value}>
        {slots.default?.()}
      </HoverCardPrimitive>
    );
  },
});

const HoverCardContent = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <Teleport to="body">
        <HoverCardPositioner>
          <HoverCardContentPrimitive
            class={cn(
              "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              attrs.class ?? ""
            )}
          >
            {slots.default?.()}
          </HoverCardContentPrimitive>
        </HoverCardPositioner>
      </Teleport>
    );
  },
});

export { HoverCard, HoverCardTrigger, HoverCardContent };

