<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
    <slot />
    <div
      v-if="$slots.title || $slots.description"
      class="flex flex-col space-y-1.5 p-6"
    >
      <h3
        v-if="$slots.title"
        class="text-lg font-semibold leading-none tracking-tight"
      >
        <slot name="title" />
      </h3>
      <p v-if="$slots.description" class="text-sm text-muted-foreground">
        <slot name="description" />
      </p>
    </div>
    <div v-if="$slots.content" class="p-6 pt-0">
      <slot name="content" />
    </div>

    <div v-if="$slots.footer" class="flex items-center p-6 pt-0">
      <slot name="footer" />
    </div>
  </div>
</template>

