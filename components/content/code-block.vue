<script lang="ts" setup>
import { CopyIcon, Check } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
import { ref } from "vue";

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
    class="relative"
    ref="codeContainer"
    @mousemove="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <ContentSlot :use="$slots.default" />
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

