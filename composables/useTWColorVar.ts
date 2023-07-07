import { MaybeElement, MaybeElementRef } from "@vueuse/core";

export const useTWColorVar = (
  cssVar: string,
  el: MaybeElementRef<MaybeElement>
) => {
  const value = useCssVar(cssVar, el);

  const computedValue = computed({
    get: () => {
      return value.value ? `hsla(${value.value.replaceAll(" ", ", ")}, 1)` : "";
    },
    set: (newValue: string) => {
      value.value = newValue
        .replace("hsla(", "")
        .replace(")", "")
        .split(",")
        .slice(0, -1)
        .join("");
    },
  });

  return computedValue;
};

