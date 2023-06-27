<script setup lang="ts">
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
</script>

<template>
  <div class="space-y-2 w-full">
    <Label for="email">Email</Label>
    <Input type="email" id="email" placeholder="Email" />
  </div>
</template>
