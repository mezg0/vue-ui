<template>
  <div>
    <div>
      <NuxtLink
        href="/"
        :class="buttonVariants({ variant: 'link', size: 'xs' })"
      >
        Get Started</NuxtLink
      >
    </div>
    <div class="space-y-4 flex flex-col">
      <template v-for="link in links">
        <span
          aria-disabled="true"
          class="cursor-not-allowed text-muted-foreground opacity-25 w-max"
          :class="buttonVariants({ variant: 'link', size: 'xs' })"
          v-if="link.disabled"
        >
          {{ link.name }}
        </span>
        <NuxtLink
          v-else
          :href="link.url"
          class="[&.router-link-exact-active]:opacity-100 opacity-50 w-max"
          :class="buttonVariants({ variant: 'link', size: 'xs' })"
        >
          {{ link.name }}
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { buttonVariants } from "~/components/button.vue";

const links: { name: string; url: string; disabled?: boolean }[] = [
  {
    name: "Accordion",
    url: "/component/accordion",
  },
  {
    name: "Alert",
    url: "/component/alert",
  },
  {
    name: "Alert Dialog",
    url: "/component/alert-dialog",
  },
  {
    name: "Badge",
    url: "/component/badge",
  },
  {
    name: "Button",
    url: "/component/button",
  },
  {
    name: "Card",
    url: "/component/card",
    disabled: true,
  },
  {
    name: "Checkbox",
    url: "/component/checkbox",
    disabled: true,
  },
  {
    name: "Context Menu",
    url: "/component/context-menu",
    disabled: true,
  },
  {
    name: "Dialog",
    url: "/component/dialog",
    disabled: true,
  },
  {
    name: "Dropdown Menu",
    url: "/component/dropdown-menu",
    disabled: true,
  },
  {
    name: "Hover Card",
    url: "/component/hover-card",
    disabled: true,
  },
  {
    name: "Input",
    url: "/component/input",
    disabled: true,
  },
  {
    name: "Label",
    url: "/component/label",
    disabled: true,
  },
  {
    name: "Separator",
    url: "/component/separator",
    disabled: true,
  },
  {
    name: "Sheet",
    url: "/component/sheet",
  },
];
</script>

