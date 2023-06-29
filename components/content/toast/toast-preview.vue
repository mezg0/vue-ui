<script setup lang="ts">
import { useToast } from "~/components/ui/toast";
import { Button } from "~/components/ui/button";

const toast = useToast();

const handleOnClick = () => {
  toast({
    title: "Job done!",
    description: "This job has been set to completed",
  });
};
</script>

<template>
  <Button @click="handleOnClick">Show Toast</Button>
</template>

