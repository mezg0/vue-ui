import { ClassValue, clsx } from "clsx";
import { h, Slots, PropType } from "vue";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function renderAsChild(slots: Slots, attrs: Record<string, unknown>) {
  if (!slots.default?.().length) return null;

  return h(slots.default()[0], { ...attrs });
}

type RemoveDynamicKeys<T> = {
  [K in keyof T as string extends K
    ? never
    : K extends number | typeof Symbol.iterator
    ? never
    : K]: T[K];
};

export type ExtendProps<Props> = RemoveDynamicKeys<
  Required<{
    [key in keyof Props]: {
      type: PropType<Props[key]>;
      required: undefined extends Props[key] ? false : true;
    };
  }>
>;

