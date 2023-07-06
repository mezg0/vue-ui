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
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const theme = ref({
  label: "Default",
  value: "default",
});

const radius = ref("");
const background = ref("");

const light = ref<HTMLElement | null>(null);

watch(radius, (value) => {
  if (!light.value) return;
  light.value.style.setProperty("--radius", value);
});
watch(background, (value) => {
  if (!light.value) return;
  light.value.style.setProperty("--background", value);
});

onMounted(() => {
  if (!light.value) return;
  radius.value = getComputedStyle(document.body).getPropertyValue("--radius");
  light.value.style.setProperty("--radius", radius.value);

  background.value = getComputedStyle(document.body).getPropertyValue(
    "--background"
  );

  light.value.style.setProperty("--background", background.value);
});
</script>

<template>
  <div>
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
    </div>
    <div class="grid grid-cols-2 gap-8 mt-8">
      <div ref="light">
        <Card>
          <CardHeader>
            <CardTitle>Light</CardTitle>
          </CardHeader>
          <CardContent>
            <Button> Button </Button>
          </CardContent>
        </Card>
      </div>
      <div ref="dark" class="dark">
        <Card>
          <CardHeader>
            <CardTitle>Dark</CardTitle>
          </CardHeader>
          <CardContent>
            <Button> Button </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

