<script setup lang="ts">
import Tabs, {
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/tabs.vue";

defineProps<{ previewCode: string }>();
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
        <div class="w-full max-w-[70%]">
          <slot />
        </div>
      </Card>
    </TabsContent>
    <TabsContent value="code">
      <LayoutCodeBlock :content="previewCode" language="vue" />
    </TabsContent>
  </Tabs>
</template>

