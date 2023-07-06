<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectOption,
  SelectValue,
  SelectLabel,
} from "~/components/ui/select";
</script>

<template>
  <Select>
    <SelectLabel>Fruit</SelectLabel>
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

