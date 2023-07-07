<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectOption,
  SelectValue,
  SelectLabel,
} from "~/components/ui/select";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ColorPicker, ColorPickerInput } from "~/components/ui/color-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";

const theme = ref({
  label: "Default",
  value: "default",
});

const light = ref<HTMLElement | null>(null);
const radius = useCssVar("--radius", light);
const background = useCssVar("--background", light);
const card = useCssVar("--card", light);

onMounted(() => {
  if (!light.value) return;
  light.value.removeAttribute("style");
});

const colorPickerValue = ref("hsla(10, 81%, 59%, 1)");
watch(colorPickerValue, (value) => {
  const strippedValue = value
    .replace("hsla(", "")
    .replace(")", "")
    .replaceAll(",", "");

  card.value = strippedValue.split(" ").splice(0, 3).join(" ");
});
</script>

<template>
  <div>
    <!-- {{ colorPickerValue }}

    <Popover closeOnInteractOutside>
      <PopoverTrigger>
        <Button>Color</Button>
      </PopoverTrigger>
      <PopoverContent class="w-64 p-0">
        <ColorPicker v-model="colorPickerValue" show-alpha id="test" />
      </PopoverContent>
    </Popover>
    <div class="w-48 max-w-full">
      <Select v-model="theme">
        <SelectLabel>Theme</SelectLabel>
        <SelectTrigger>
          <SelectValue placeholder="Select a Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectOption value="default" label="Default" />
          <SelectOption value="playful" label="Playful" />
        </SelectContent>
      </Select>
    </div>
    <div class="mt-8">
      <div class="grid gap-2">
        <Label>Border radius</Label>
        <Input v-model="radius" />
      </div>
      <div class="grid gap-2 mt-4">
        <Label>Background</Label>
        <Input v-model="background" />
      </div>
    </div> -->
    <div class="grid grid-cols-2 gap-8 mt-8 theme-container">
      <div ref="light" class="light">
        <ThemeComponentContainer title="Light" />
      </div>
      <div ref="dark" class="dark">
        <ThemeComponentContainer title="Dark" />
      </div>
    </div>
  </div>
</template>

