# Badge
Displays a badge or a component that looks like a badge.

## Preview
::component-preview
#preview
  :::badge-preview
  :::

#code
```vue
<script setup lang="ts">
import { Badge } from "~/components/ui/badge";
</script>

<template>
  <Badge>Badge</Badge>
</template>
```
::

## Installation
### Copy and paste this into your project

::code-block
```tsx
// ~/components/ui/badge.tsx

import { VariantProps, cva } from "class-variance-authority";
import { cn } from "~/lib/utils";
import { defineComponent } from "vue";
export const badgeVariants = cva(
  "inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
        secondary:
          "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive:
          "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = defineComponent({
  props: {
    variant: {
      type: String as PropType<VariantProps<typeof badgeVariants>["variant"]>,
    },
  },
  setup({ variant }, { slots, attrs }) {
    return () => (
      <div class={cn(badgeVariants({ variant }), attrs.class ?? "")}>
        {slots.default?.()}
      </div>
    );
  },
});

export { Badge };
```
::

## Usage
::code-block
```ts
import { Badge } from "~/components/ui/badge";
```
::

::code-block
```vue
<Badge>Badge</Badge>
```
::

### Link
You can use the `badgeVariants` helper to create a link that looks like a badge.

::code-block
```ts
import { badgeVariants } from "~/components/ui/badge";
```
::

::code-block
```vue
<Link class="badgeVariants({ variant: 'outline' })">Link</Link>
```
::

## Examples

### Default
::component-preview
#preview
  :::badge-default
  :::

#code
```vue
<script setup lang="ts">
import { Badge } from "~/components/ui/badge";
</script>

<template>
  <Badge>Badge</Badge>
</template>
```
::

### Secondary
::component-preview
#preview
  :::badge-secondary
  :::

#code
```vue
<script setup lang="ts">
import { Badge } from "~/components/ui/badge";
</script>

<template>
  <Badge variant="secondary">Badge</Badge>
</template>
```
::

### Outline
::component-preview
#preview
  :::badge-outline
  :::

#code
```vue
<script setup lang="ts">
import { Badge } from "~/components/ui/badge";
</script>

<template>
  <Badge variant="outline">Badge</Badge>
</template>
```
::

### Destructive
::component-preview
#preview
  :::badge-destructive
  :::

#code
```vue
<script setup lang="ts">
import { Badge } from "~/components/ui/badge";
</script>

<template>
  <Badge variant="destructive">Badge</Badge>
</template>
```
::