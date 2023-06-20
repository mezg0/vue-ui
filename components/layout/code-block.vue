<script setup lang="ts">
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import { CopyIcon } from "lucide-vue-next";
import { Check } from "lucide-vue-next";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("vue", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("css", css);

const props = defineProps<{ content: string; language: string }>();

const isCopied = ref(false);

const onCopyClick = () => {
  navigator.clipboard.writeText(props.content).then(() => {
    isCopied.value = true;
  });
};

const codeBlock = ref<HTMLElement | null>(null);
const showScrollShadow = ref(false);

onMounted(() => {
  if (!codeBlock.value) return;
  // if the height of the code block is lower than the height of the content show the shadow

  if (codeBlock.value?.scrollHeight > codeBlock.value?.clientHeight) {
    showScrollShadow.value = true;
  }
});
</script>

<template>
  <div class="relative">
    <pre
      class="bg-background text-foreground border max-h-96"
      ref="codeBlock"
      v-html="hljs.highlight(props.content, { language: props.language }).value"
    />
    <div
      class="absolute flex items-center justify-center bg-gradient-to-b from-background/30 to-muted/90 p-2 inset-x-0 bottom-0 h-12 pointer-events-none"
      v-if="showScrollShadow"
    />
    <Button
      size="sm"
      variant="secondary"
      class="top-1 right-1 absolute"
      @click="onCopyClick"
    >
      <Check v-if="isCopied" class="h-3 w-3" />
      <CopyIcon v-else class="h-3 w-3" />
    </Button>
  </div>
</template>

