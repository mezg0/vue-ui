<template>
  <h1>Button</h1>
  <Button>Button</Button>
  <Button variant="outline">Button</Button>
  <Button variant="destructive">Button</Button>
  <Button variant="secondary">Button</Button>
  <Button variant="link">Button</Button>
  <NuxtLink href="#" :class="buttonVariants({ variant: 'secondary' })">
    This is a Link
  </NuxtLink>
</template>

<script setup>
import { buttonVariants } from "~/components/button";
</script>

