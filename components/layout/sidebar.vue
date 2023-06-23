<template>
  <div class="pl-1">
    <div>
      <NuxtLink
        href="/"
        :class="cn(buttonVariants({ variant: 'link' }), 'py-2')"
      >
        Get Started
      </NuxtLink>
    </div>
    <div class="flex flex-col mt-4" v-if="navigation?.[0]?.children">
      <template v-for="link in navigation[0].children">
        <span
          aria-disabled="true"
          class="cursor-not-allowed text-muted-foreground opacity-50 w-max py-2"
          :class="cn(buttonVariants({ variant: 'link' }), 'py-2')"
          v-if="link._draft"
        >
          {{ link.title }}
        </span>
        <NuxtLink
          v-else
          :href="link._path"
          class="[&.router-link-exact-active]:opacity-100 opacity-75 w-max py-2"
          :class="cn(buttonVariants({ variant: 'link' }), 'py-2')"
        >
          {{ link.title }}
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation();
});
</script>

