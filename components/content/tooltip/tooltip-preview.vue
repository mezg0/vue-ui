<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { Button } from "~/components/ui/button";
</script>
<template>
  <Tooltip>
    <TooltipTrigger>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>

    <TooltipContent>My tooltip content</TooltipContent>
  </Tooltip>
</template>

