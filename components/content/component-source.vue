<script setup lang="ts">
import CodeBlock from "./code-block.vue";
</script>

<template>
  <CodeBlock>
    <ContentSlot :use="$slots.default" />
  </CodeBlock>
</template>

