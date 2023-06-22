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
    <div class="space-y-4 flex flex-col mt-8" v-if="navigation?.[0]?.children">
      <template v-for="link in navigation[0].children">
        <span
          aria-disabled="true"
          class="cursor-not-allowed text-muted-foreground opacity-25 w-max"
          :class="buttonVariants({ variant: 'link', size: 'xs' })"
          v-if="link._draft"
        >
          {{ link.title }}
        </span>
        <NuxtLink
          v-else
          :href="link._path"
          class="[&.router-link-exact-active]:opacity-100 opacity-50 w-max"
          :class="buttonVariants({ variant: 'link', size: 'xs' })"
        >
          {{ link.title }}
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { buttonVariants } from "~/components/button.vue";

const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation();
});
</script>

