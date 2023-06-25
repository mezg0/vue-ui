import { TabContent, TabList, Tabs, TabTrigger } from "@ark-ui/vue";
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";

const TabsList = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <TabList
        class={cn(
          "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </TabList>
    );
  },
});

const TabsTrigger = defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots, attrs }) {
    return () => (
      <TabTrigger value={props.value}>
        <button
          class={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm",
            attrs.class ?? ""
          )}
        >
          {slots.default?.()}
        </button>
      </TabTrigger>
    );
  },
});

const TabsContent = defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots, attrs }) {
    return () => (
      <TabContent
        value={props.value}
        class={cn(
          "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </TabContent>
    );
  },
});

export { Tabs, TabsList, TabsTrigger, TabsContent };

