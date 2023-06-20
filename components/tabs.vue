<script lang="tsx" setup>
import * as tabs from "@zag-js/tabs";
import { normalizeProps, useMachine } from "@zag-js/vue";
import {
  computed,
  ComputedRef,
  InjectionKey,
  provide,
  defineComponent,
} from "vue";

const props = defineProps<{
  defaultValue: string;
}>();

const [state, send] = useMachine(
  tabs.machine({ id: "1", value: props.defaultValue })
);
const api = computed(() => tabs.connect(state.value, send, normalizeProps));

provide(tabsInjectionKey, api);
</script>

<template>
  <div v-bind="api.rootProps">
    <slot />
  </div>
</template>

<script lang="tsx">
const tabsInjectionKey = Symbol() as InjectionKey<
  ComputedRef<ReturnType<typeof tabs.connect>>
>;

const useApi = () => {
  const api = inject(tabsInjectionKey);

  if (!api) {
    throw new Error("The root context was not found for the tabs");
  }

  return api;
};

export const TabsList = defineComponent({
  setup(_, context) {
    const api = useApi();

    return () => (
      <div
        class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
        {...api.value.tablistProps}
      >
        {context.slots.default?.()}
      </div>
    );
  },
});

export const TabsTrigger = defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const api = useApi();

    return () => (
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm"
        {...api.value.getTriggerProps({ value: props.value })}
      >
        {context.slots.default?.()}
      </button>
    );
  },
});

export const TabsContent = defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const api = useApi();

    return () => (
      <div
        class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        {...api.value.getContentProps({ value: props.value })}
      >
        {context.slots.default?.()}
      </div>
    );
  },
});
</script>

