import {
  Accordion,
  AccordionTrigger as AccordionTriggerPrimitive,
  AccordionItem as AccordionItemPrimitive,
  AccordionContent as AccordionContentPrimitive,
} from "@ark-ui/vue";
import { cn } from "~/lib/utils";
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";

const AccordionItem = defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup({ value }, { slots, attrs }) {
    return () => (
      <AccordionItemPrimitive
        class={cn("border-b", attrs.class ?? "")}
        value={value}
        {...attrs}
      >
        {slots.default?.()}
      </AccordionItemPrimitive>
    );
  },
});

const AccordionTrigger = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <AccordionTriggerPrimitive>
        <button
          class={cn(
            "w-full flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            attrs.class ?? ""
          )}
          {...attrs}
        >
          {slots.default?.()}
        </button>
      </AccordionTriggerPrimitive>
    );
  },
});

const AccordionContent = defineComponent({
  setup(_, { slots, attrs }) {
    const content = ref<HTMLElement | null>(null);
    const container = ref<HTMLElement | null>(null);

    const updateContentHeight = () => {
      if (!content.value || !container.value) return;

      container.value.style.setProperty("height", "auto");
      const contentHeight = getComputedStyle(content.value).height;

      container.value.style.setProperty("--content-height", contentHeight);

      content.value.style.setProperty("height", null);
    };

    onMounted(() => {
      updateContentHeight();
      window.addEventListener("resize", updateContentHeight);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateContentHeight);
    });

    return () => (
      <div ref={container}>
        <AccordionContentPrimitive
          class={cn(
            "overflow-hidden block text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down h-0 data-[expanded]:h-[var(--content-height)] duration-300 ease-in-out",
            attrs.class ?? ""
          )}
          {...attrs}
        >
          <div class="pb-4 pt-0" ref={content}>
            {slots.default?.()}
          </div>
        </AccordionContentPrimitive>
      </div>
    );
  },
});

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

