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

const html = () => {
  return hljs.highlight(props.content.replaceAll("scropt", "script"), {
    language: props.language,
  }).value;
};

const proxyHtml = ref<string | null>(null);

onMounted(() => {
  proxyHtml.value = html();
});

const isCopied = ref(false);

const onCopyClick = () => {
  navigator.clipboard.writeText(props.content).then(() => {
    isCopied.value = true;
  });
};
</script>

<template>
  <div class="relative" v-if="proxyHtml">
    <pre class="bg-background text-foreground border" v-html="proxyHtml"></pre>
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

