<script setup lang="ts">
import Alert from "./alert.vue";
import { MailIcon } from "lucide-vue-next";
</script>

<template>
  <Alert>
    <MailIcon class="h-4 w-4" />
    <template #title> You have mail </template>
    <template #description> Maybe you should check it </template>
  </Alert>
</template>

