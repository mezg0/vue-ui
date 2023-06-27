<script setup lang="ts">
import { CalendarDays } from "lucide-vue-next";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "~/components/ui/hover-card";
import { Button } from "~/components/ui/button";
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>
      <Button variant="link">@nuxtjs</Button>
    </HoverCardTrigger>
    <HoverCardContent class="w-48">
      <div class="flex justify-between space-x-4">
        <div class="space-y-1">
          <h4 class="text-sm font-semibold">@nuxtjs</h4>
          <p class="text-sm">The Vue Framework</p>
          <div className="flex items-center pt-2">
            <CalendarDays class="mr-2 h-4 w-4 opacity-70" />
            <span class="text-xs text-muted-foreground"> Joined December 2021 </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
HoverCardContent
