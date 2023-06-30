import { cn } from "~/lib/utils";
import { defineComponent, PropType } from "vue";

const Separator = defineComponent({
  props: {
    orientation: {
      type: String as PropType<"horizontal" | "vertical">,
      default: "horizontal",
    },
    decorative: {
      type: Boolean,
      default: true,
    },
  },
  setup({ orientation, decorative }, { attrs }) {
    return () => (
      <div
        role={decorative ? "separator" : "none"}
        data-orientation={orientation}
        class={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          attrs.class ?? ""
        )}
      />
    );
  },
});

export { Separator };

