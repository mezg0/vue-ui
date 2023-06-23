import * as tabs from "@zag-js/tabs";
import { normalizeProps, useMachine } from "@zag-js/vue";
import {
  computed,
  ComputedRef,
  InjectionKey,
  provide,
  defineComponent,
  watch,
} from "vue";
import { cn } from "~/lib/utils";

const tabsInjectionKey = Symbol() as InjectionKey<
  ComputedRef<ReturnType<typeof tabs.connect>>
>;

const useTabsContext = () => {
  const api = inject(tabsInjectionKey);

  if (!api) {
    throw new Error("The root context was not found for the tabs");
  }

  return api;
};

const Tabs = defineComponent({
  props: {
    defaultValue: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  emits: {
    change: (value: string) => true,
  },
  setup(props, { slots, emit }) {
    const [state, send] = useMachine(
      tabs.machine({ id: "tabs", value: props.defaultValue })
    );
    const api = computed(() => tabs.connect(state.value, send, normalizeProps));

    provide(tabsInjectionKey, api);

    watch(
      () => api.value.value,
      (value) => {
        value && emit("change", value);
      }
    );

    watch(
      () => props.value,
      (value) => {
        value && api.value.setValue(value);
      }
    );

    return () => <div {...api.value.rootProps}>{slots.default?.()}</div>;
  },
});

const TabsList = defineComponent({
  setup(_, { slots, attrs }) {
    const api = useTabsContext();

    return () => (
      <div
        class={cn(
          "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
          attrs.class ?? ""
        )}
        {...api.value.tablistProps}
      >
        {slots.default?.()}
      </div>
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
    const api = useTabsContext();

    return () => (
      <button
        class={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm",
          attrs.class ?? ""
        )}
        {...api.value.getTriggerProps({ value: props.value })}
      >
        {slots.default?.()}
      </button>
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
    const api = useTabsContext();

    return () => (
      <div
        class={cn(
          "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          attrs.class ?? ""
        )}
        {...api.value.getContentProps({ value: props.value })}
      >
        {slots.default?.()}
      </div>
    );
  },
});

export { Tabs, TabsList, TabsTrigger, TabsContent };

