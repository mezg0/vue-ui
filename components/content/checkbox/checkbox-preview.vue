<script setup lang="ts">
import { Checkbox } from "~/components/ui/checkbox";

const checked = ref(false);
</script>

<template>
  <Checkbox v-model="checked" />
</template>

