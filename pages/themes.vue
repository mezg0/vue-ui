<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectOption,
  SelectValue,
  SelectLabel,
} from "~/components/ui/select";
import { inputClasses } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  ColorPicker,
  ColorPickerInput,
  ColorPickerInputTrigger,
} from "~/components/ui/color-picker";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { generateCss, themes, twToHSLA } from "~/lib/themes";
import CodeBlock from "~/components/layout/code-block.vue";

const theme = ref(themes.default);
const selectedTheme = ref({
  value: "default",
  label: "Default",
});

const light = ref<HTMLElement | null>(null);
const dark = ref<HTMLElement | null>(null);

const lightPrimary = useTWColorVar("--primary", light);
const darkPrimary = useTWColorVar("--primary", dark);

const radiusLight = useCssVar("--radius", light);
const radiusDark = useCssVar("--radius", dark);
const radiusNumber = computed({
  get: () => {
    return radiusLight.value.replace("rem", "");
  },
  set: (value) => {
    radiusLight.value = `${value}rem`;
    radiusDark.value = `${value}rem`;
  },
});

watch(
  () => radiusNumber.value,
  (value) => {
    theme.value.light["--radius"] = `${value}rem`;
    theme.value.dark["--radius"] = `${value}rem`;
  }
);

const setSelectedTheme = (value: keyof typeof themes) => {
  theme.value = themes[value as keyof typeof themes];

  Object.keys(theme.value.light).forEach((key) => {
    const value = theme.value.light[key as keyof typeof theme.value.light];
    light.value?.style.setProperty(key, value);
  });

  Object.keys(theme.value.dark).forEach((key) => {
    const value = theme.value.dark[key as keyof typeof theme.value.dark];
    dark.value?.style.setProperty(key, value);
  });

  // update the inputs
  radiusNumber.value = theme.value.light["--radius"].replace("rem", "");

  lightPrimary.value = twToHSLA(theme.value.light["--primary"]);
  darkPrimary.value = twToHSLA(theme.value.dark["--primary"]);
};

onMounted(() => {
  setSelectedTheme("default");
});
</script>

<template>
  <div>
    <div class="prose dark:prose-invert">
      <h1>Themes</h1>
      <p>Create your theme</p>
    </div>

    <div class="mt-12">
      <div class="prose mb-4">
        <h2>Preview</h2>
      </div>
      <div class="grid lg:grid-cols-2 gap-8">
        <div ref="light" class="light">
          <ThemeComponentContainer title="Light" />
        </div>

        <div ref="dark" class="dark">
          <ThemeComponentContainer title="Dark" />
        </div>
      </div>
    </div>
    <Separator class="my-8" />
    <div>
      <div class="prose mb-4">
        <h2>Options</h2>
      </div>
      <div class="flex gap-8">
        <div class="w-48">
          <Select
            v-model="selectedTheme"
            @change="setSelectedTheme($event?.value as keyof typeof themes)"
          >
            <SelectLabel>Theme</SelectLabel>
            <SelectTrigger>
              <SelectValue class="capitalize" />
            </SelectTrigger>
            <SelectContent>
              <SelectOption
                class="capitalize"
                v-for="(theme, key) in themes"
                :value="key"
                :label="key"
              />
            </SelectContent>
          </Select>
        </div>
        <div class="grid gap-2">
          <Label>Border radius</Label>
          <div class="flex space-x-1">
            <input
              :class="inputClasses"
              type="number"
              step="0.25"
              v-model="radiusNumber"
            />
            <div
              class="w-12 h-10 border rounded-md flex items-center text-sm text-muted-foreground justify-center"
            >
              <span>rem</span>
            </div>
          </div>
        </div>
        <div class="grid gap-2">
          <Label>Primary color</Label>
          <div class="flex space-x-2 h-10">
            <ColorPickerInput v-model="lightPrimary" id="light-primary">
              <ColorPickerInputTrigger>
                <Button
                  size="icon"
                  variant="outline"
                  class="w-10 shrink-0 overflow-hidden"
                >
                  <span
                    class="h-full w-full"
                    :style="{ backgroundColor: lightPrimary }"
                  />
                </Button>
              </ColorPickerInputTrigger>
            </ColorPickerInput>
            <Separator orientation="vertical" />
            <ColorPickerInput v-model="darkPrimary" id="dark-primary">
              <ColorPickerInputTrigger>
                <Button
                  size="icon"
                  variant="outline"
                  class="w-10 shrink-0 overflow-hidden"
                >
                  <span
                    class="h-full w-full"
                    :style="{ backgroundColor: darkPrimary }"
                  />
                </Button>
              </ColorPickerInputTrigger>
            </ColorPickerInput>
          </div>
        </div>
      </div>
    </div>
    <Separator class="my-8" />
    <div>
      <div class="prose mb-4">
        <h2>Generated CSS</h2>
        <p>Copy and paste this into your CSS file</p>
      </div>
      <CodeBlock
        :content="generateCss(theme)"
        language="css"
        class="my-8 z-0"
      />
    </div>
  </div>
</template>

