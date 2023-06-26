<template>
  <div>
    <header class="border-b h-14 sticky top-0 bg-background z-10">
      <nav class="flex items-center h-full container">
        <div class="sm:hidden mr-4 flex items-center">
          <Sheet :open="sheetOpen" @open-change="(open) => (sheetOpen = open)">
            <SheetTrigger as-child v-slot="triggerProps">
              <button v-bind="triggerProps"><Menu /></button>
            </SheetTrigger>
            <SheetContent side="left">
              <LayoutSidebar :navigation="navigation" />
            </SheetContent>
          </Sheet>
        </div>
        <NuxtLink href="/" class="font-bold">mezg0/vue-ui</NuxtLink>
        <div class="ml-4 space-x-4">
          <NuxtLink href="/component/accordion">Components</NuxtLink>
        </div>
      </nav>
    </header>
    <div
      class="container flex-1 items-start sm:grid sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
    >
      <div
        class="border-r h-full max-h-screen overflow-auto py-8 hidden sm:block sticky top-14"
      >
        <LayoutSidebar :navigation="navigation" />
      </div>
      <main class="py-8 min-h-[calc(100vh-3.5rem)]">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
<script setup>
import { Menu } from "lucide-vue-next";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";

const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation();
});

const sheetOpen = ref(false);

const route = useRoute();

watch(route, () => {
  sheetOpen.value = false;
});

const color = useColorMode();

color.preference = "light";
</script>

