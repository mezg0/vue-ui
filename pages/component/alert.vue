<template>
  <div class="page">
    <h1>Alert</h1>

    <Alert>
      <AlertTitle> You have mail </AlertTitle>
      <AlertDescription> This is the description </AlertDescription>
    </Alert>
  </div>
</template>
<script setup lang="ts">
import Alert, { AlertDescription, AlertTitle } from "~/components/alert.vue";
</script>

