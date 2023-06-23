# Card

Displays a card with header, content, and footer.

## Preview
::component-preview
#preview
  :::card
  #title
  Notifications
  #description
  You have 4 unread messages.
  :::

#code 
```vue
<script setup>
import Alert from '~/components/ui/alert.vue';
import { MailIcon } from "lucide-vue-next";
</script>

<template>
  <Alert>
    <MailIcon class="h-4 w-4"/>
    <template #title>
      You have mail
    </template>
    <template #description>
      Maybe you should check it
    </template>
  </Alert>
</template>
```
::