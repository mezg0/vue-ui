import { ClassValue, clsx } from "clsx";
import { h, Slots } from "vue";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function asChild(slots: Slots, attrs: Record<string, unknown>) {
  if (!slots.default?.().length) return null;

  return h(slots.default()[0], { ...attrs });
}

