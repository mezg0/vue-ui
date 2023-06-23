<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";
import { MailIcon } from "lucide-vue-next";
</script>

<template>
  <Alert>
    <MailIcon class="h-4 w-4" />
    <AlertTitle>You have mail</AlertTitle>
    <AlertDescription>You should read it.</AlertDescription>
  </Alert>
</template>

