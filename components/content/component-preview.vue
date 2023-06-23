<script setup lang="ts">
import Tabs, {
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/tabs.vue";

import { Card } from "~/components/ui/card";

withDefaults(
  defineProps<{
    centered?: boolean;
  }>(),
  {
    centered: true,
  }
);
</script>

<template>
  <Tabs default-value="preview">
    <TabsList>
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
    <TabsContent value="preview">
      <Card
        class="not-prose flex items-center justify-center p-10 min-h-[350px]"
      >
        <div
          class="w-full md:max-w-[70%] not-prose"
          :class="centered && 'flex justify-center'"
        >
          <ContentSlot :use="$slots.preview" />
        </div>
      </Card>
    </TabsContent>
    <TabsContent value="code">
      <CodeBlock>
        <ContentSlot :use="$slots.code" />
      </CodeBlock>
    </TabsContent>
  </Tabs>
</template>

