<script setup lang="ts">
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import { CopyIcon, Check } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
import { ref } from "vue";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("vue", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("css", css);

const props = defineProps<{ content: string; language: string }>();

const codeContainer = ref<HTMLElement | null>(null);
const isCopied = ref(false);
const isHovered = ref(false);

const onCopyClick = () => {
  const codeBlock = codeContainer.value?.querySelector("code");

  if (!codeBlock) return;

  navigator.clipboard.writeText(codeBlock.textContent || "").then(() => {
    isCopied.value = true;
  });
};
</script>

<template>
  <div
    class="relative prose"
    @mousemove="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <pre
      v-html="hljs.highlight(props.content, { language: props.language }).value"
    />
    <Transition
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      @after-leave="isCopied = false"
    >
      <Button
        v-show="isHovered"
        size="sm"
        variant="secondary"
        class="top-1 right-1 absolute transition-opacity"
        @click="onCopyClick"
      >
        <Check v-if="isCopied" class="h-3 w-3" />
        <CopyIcon v-else class="h-3 w-3" />
      </Button>
    </Transition>
  </div>
</template>

