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
import { generateCss, themes } from "~/lib/themes";
import CodeBlock from "~/components/layout/code-block.vue";

const theme = ref(themes.default);

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
</script>

<template>
  <div>
    <div class="prose dark:prose-invert">
      <h1>Themes</h1>
      <p>Create your theme</p>
    </div>
    <div class="grid lg:grid-cols-2 gap-8 mb-8 mt-12">
      <div ref="light" class="light">
        <ThemeComponentContainer title="Light" />
      </div>

      <div ref="dark" class="dark">
        <ThemeComponentContainer title="Dark" />
      </div>
    </div>
    <div class="space-y-4 w-56">
      <div class="space-y-2">
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
      <div class="space-y-2">
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
    <CodeBlock :content="generateCss(theme)" language="css" class="my-8" />
  </div>
</template>

