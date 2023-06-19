<script setup lang="tsx">
import * as accordion from "@zag-js/accordion";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed } from "vue";

const [state, send] = useMachine(
  accordion.machine({ id: "1", collapsible: true })
);

const api = computed(() =>
  accordion.connect(state.value, send, normalizeProps)
);

provide(accordionInjectionKey, api);
</script>

<template>
  <div v-bind="api.rootProps">
    <slot />
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";

const accordionInjectionKey = Symbol() as InjectionKey<
  ComputedRef<ReturnType<typeof accordion.connect>>
>;

const valueInjectionKey = Symbol() as InjectionKey<string>;

const useApi = () => {
  const api = inject(accordionInjectionKey);

  if (!api) {
    throw new Error("The root context was not found for the accordion");
  }

  return api;
};

const useValue = () => {
  const value = inject(valueInjectionKey);

  if (!value) {
    throw new Error("The value was not provided for this item");
  }

  return value;
};

export const AccordionItem = defineComponent(
  (props: { value: string }, context) => {
    const api = useApi();

    provide(valueInjectionKey, props.value);
    return () => (
      <div {...api.value.getItemProps({ value: props.value })} class="border-b">
        {context.slots.default?.()}
      </div>
    );
  },
  {
    props: {
      value: {
        type: String,
        required: true,
      },
    },
  }
);

export const AccordionTrigger = defineComponent((_, context) => {
  const api = useApi();
  const value = useValue();
  return () => (
    <button
      {...api.value.getTriggerProps({ value })}
      class="flex flex-1 items-center justify-between py-4 font-medium hover:underline "
    >
      {context.slots.default?.()}
    </button>
  );
});

export const AccordionContent = defineComponent((_, context) => {
  const api = useApi();
  const value = useValue();
  return () => (
    <div {...api.value.getContentProps({ value })}>
      {context.slots.default?.()}
    </div>
  );
});
</script>

