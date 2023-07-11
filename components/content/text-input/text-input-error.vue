<script lang="ts" setup>
import { TextInput } from "~/components/ui/text-input";
</script>

<template>
  <TextInput
    label="Email"
    description="Yor work email address"
    placeholder="Email"
    value="test@email.com"
    error-message="That's not a real email address"
    class="w-64"
  />
</template>

