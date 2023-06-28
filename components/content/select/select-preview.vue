<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectOption,
  SelectValue,
} from "~/components/ui/select";
</script>

<template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectOption value="apple" label="Apple" />
      <SelectOption value="banana" label="Banana" />
      <SelectOption value="blueberry" label="Blueberry" />
      <SelectOption value="grapes" label="Grapes" />
      <SelectOption value="pineapple" label="Pineapple" />
    </SelectContent>
  </Select>
</template>

