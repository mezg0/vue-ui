<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";
import { InfoIcon } from "lucide-vue-next";
</script>

<template>
  <Alert variant="destructive">
    <InfoIcon class="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Your session has expired. Please log in again.
    </AlertDescription>
  </Alert>
</template>

