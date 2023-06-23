# Card

Displays a card with header, content, and footer.

## Preview
::component-preview
#preview
  :::card-preview
  :::

#code 
```vue
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
  <Card class="w-[380px]">
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
```
::

## Installation

### Copy and paste this into your project

::code-block
```tsx
// ~/components/ui/card.tsx

import { defineComponent } from "vue";
import { cn } from "~/lib/utils";

const Card = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <div
        class={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </div>
    );
  },
});

const CardHeader = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <div class={cn("flex flex-col space-y-1.5 p-6", attrs.class ?? "")}>
        {slots.default?.()}
      </div>
    );
  },
});

const CardTitle = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <h3
        class={cn(
          "text-2xl font-semibold leading-none tracking-tight",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </h3>
    );
  },
});

const CardDescription = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <p class={cn("text-sm text-muted-foreground", attrs.class ?? "")}>
        {slots.default?.()}
      </p>
    );
  },
});

const CardContent = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <div class={cn("p-6 pt-0", attrs.class ?? "")}>{slots.default?.()}</div>
    );
  },
});

const CardFooter = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <div class={cn("flex items-center p-6 pt-0", attrs.class ?? "")}>
        {slots.default?.()}
      </div>
    );
  },
});

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
```

## Usage
::code-block
```ts
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
```
::

::code-block
```html
<Card>
  <CardHeader>
    <CardTitle>...</CardTitle>
    <CardDescription>...</CardDescription>
  </CardHeader>
  <CardContent>
    ...
  </CardContent>
  <CardFooter>
    ..
  </CardFooter>
</Card>
```
::