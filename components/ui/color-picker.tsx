import {
  ColorPicker as ColorPickerPrimitive,
  ColorPickerArea,
  ColorPickerAreaGradient,
  ColorPickerAreaThumb,
  ColorPickerChannelInput,
  ColorPickerChannelSliderBackground,
  ColorPickerChannelSliderThumb,
  ColorPickerChannelSliderTrack,
  ColorPickerContent,
  ColorPickerEyeDropperTrigger,
  ColorPickerSwatch,
  ColorPickerSwatchBackground,
  ColorPickerSwatchGroup,
  type ColorPickerContext,
  ColorPickerProps,
} from "@ark-ui/vue";
import { Button } from "~/components/ui/button";
import { Pipette } from "lucide-vue-next";
import { ExtendProps } from "~/lib/utils";
import { Separator } from "~/components/ui/separator";
import { Input, inputClasses } from "~/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover";

const DropperIcon = defineComponent({
  setup() {
    return () => h(Pipette, { class: "h-5 w-5" });
  },
});

const ColorPicker = defineComponent({
  props: {
    showAlpha: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
    },
  },
  emits: {
    "update:modelValue": (value?: string) => true,
  },
  setup(props, { emit }) {
    return () => (
      <ColorPickerPrimitive
        value={props.modelValue}
        onChange={(e) => emit("update:modelValue", e.value)}
      >
        {({ channels: [hue, saturation, lightness] }: ColorPickerContext) => (
          <ColorPickerContent class="w-64 flex flex-col max-w-full">
            <ColorPickerArea
              xChannel={saturation}
              yChannel={lightness}
              class="h-48 rounded-lg"
            >
              <ColorPickerAreaGradient class="h-full rounded-t-lg" />
              <ColorPickerAreaThumb class="h-4 w-4 rounded-full border-2" />
            </ColorPickerArea>
            <div class="p-4">
              <div class="flex space-x-8 items-center">
                <ColorPickerEyeDropperTrigger>
                  <Button class="w-10" size="icon" variant="ghost">
                    <DropperIcon />
                  </Button>
                </ColorPickerEyeDropperTrigger>
                <div class="space-y-6 flex-1">
                  <ColorPickerChannelSliderTrack
                    channel={hue}
                    class="h-2 rounded-full [&>*:first-child]:rounded-full"
                  >
                    <ColorPickerChannelSliderThumb class="scale-125 w-4 h-4 border-2 border-foreground shadow-xl -translate-y-1/2 -translate-x-1/2 rounded-full" />
                  </ColorPickerChannelSliderTrack>
                  {props.showAlpha && (
                    <ColorPickerChannelSliderTrack
                      channel="alpha"
                      class="h-2 rounded-full [&>*:first-child]:rounded-full [&>*:first-child]:opacity-0"
                    >
                      <ColorPickerChannelSliderThumb class="scale-125 w-4 h-4 border-2 border-foreground shadow-xl -translate-y-1/2 -translate-x-1/2 rounded-full" />
                    </ColorPickerChannelSliderTrack>
                  )}
                </div>
              </div>
              <div class="mt-8 flex space-x-2">
                <ColorPickerChannelInput class={inputClasses} channel="hex" />
                {props.showAlpha && (
                  <ColorPickerChannelInput
                    class={inputClasses}
                    channel="alpha"
                  />
                )}
              </div>
            </div>
          </ColorPickerContent>
        )}
      </ColorPickerPrimitive>
    );
  },
});

const ColorPickerInput = defineComponent({
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    showAlpha: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: true,
    },
  },
  emits: {
    "update:modelValue": (value?: string) => true,
  },
  setup(props, { slots, emit }) {
    return () => (
      <Popover closeOnInteractOutside>
        {slots.default?.()}
        <PopoverContent class="w-64 p-0 overflow-hidden">
          <ColorPicker
            modelValue={props.modelValue}
            onUpdate:modelValue={(e) => emit("update:modelValue", e)}
          />
        </PopoverContent>
      </Popover>
    );
  },
});

const ColorPickerInputTrigger = PopoverTrigger;

export { ColorPicker, ColorPickerInput, ColorPickerInputTrigger };

