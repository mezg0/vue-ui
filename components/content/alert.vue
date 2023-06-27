<script setup lang="ts">
import { Alert } from "~/components/ui/alert";
</script>

<template>
  <div
    class="not-prose bg-background text-foreground [&>svg]:text-foreground relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11"
  >
    <ContentSlot :use="$slots.default" />
  </div>
</template>

