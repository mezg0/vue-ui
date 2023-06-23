<script setup>
import Alert from "./alert.vue";
import { InfoIcon } from "lucide-vue-next";
</script>

<template>
  <Alert variant="destructive">
    <InfoIcon class="h-4 w-4" />
    <template #title> Error </template>
    <template #description>
      Your session has expired. Please log in again.
    </template>
  </Alert>
</template>

