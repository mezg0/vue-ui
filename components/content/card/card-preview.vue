<script setup lang="ts">
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Check } from "lucide-vue-next";
const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];
</script>

<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Notifications</CardTitle>
      <CardDescription>You have 3 unread messages.</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div
        v-for="notification in notifications"
        class="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
      >
        <span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">
            {{ notification.title }}
          </p>
          <p class="text-sm text-muted-foreground">
            {{ notification.description }}
          </p>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full">
        <Check class="mr-2 h-4 w-4" /> Mark all as read
      </Button>
    </CardFooter>
  </Card>
</template>

