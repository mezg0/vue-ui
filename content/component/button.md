# Button
Displays a button or a component that looks like a button.

## Preview
::component-preview
#preview
  :::button-preview
  :::

#code
```vue
<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <Button>Button</Button>
</template>
```
::

## Installation
## Copy and paste this into your project

::code-block
```tsx
// ~/components/ui/button.tsx

import { VariantProps, cva } from "class-variance-authority";
import { defineComponent } from "vue";
import { cn, renderAsChild } from "~/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4 rounded-md",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = defineComponent({
  props: {
    variant: {
      type: String as PropType<VariantProps<typeof buttonVariants>["variant"]>,
    },
    size: {
      type: String as PropType<VariantProps<typeof buttonVariants>["size"]>,
    },
    asChild: {
      type: Boolean,
      default: false,
    },
  },
  setup({ variant, size, asChild }, { slots, attrs }) {
    return () =>
      asChild ? (
        renderAsChild(slots, {
          ...attrs,
          class: cn(buttonVariants({ variant, size }), attrs.class ?? ""),
        })
      ) : (
        <button
          {...attrs}
          class={cn(buttonVariants({ variant, size }), attrs.class ?? "")}
        >
          {slots.default?.()}
        </button>
      );
  },
});

export { Button };
```
::

## Usage
::code-block
```ts
import { Button } from "~/components/ui/button";
```
::

::code-block
```html
<Button variant="secondary">Button</Button>
```

## Link
You can use the `buttonVariants` helper to create a link that looks like a button.

::code-block
```ts
import { buttonVariants } from "~/components/ui/button"
```
::

::code-block
```html
<Link class="buttonVariants({ variant: 'outline' })">Click here</Link>
```
::

Alternatively, you can set the `asChild` parameter and nest the link component.

::code-block
```html
<Button as-child>
  <Link href="/login">Login</Link>
</Button>
```
::

## Examples

### Default
::component-preview
#preview
  :::button-preview
  :::

#code
```vue
<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <Button>Button</Button>
</template>
```
::

### Secondary
::component-preview
#preview
  :::button-secondary
  :::

#code
```vue
<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <Button variant="secondary">Button</Button>
</template>
```
::

### Destructive
::component-preview
#preview
  :::button-destructive
  :::

#code
```vue
<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <Button variant="destructive">Button</Button>
</template>
```
::

### Outline
::component-preview
#preview
  :::button-outline
  :::

#code
```vue
<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <Button variant="outline">Button</Button>
</template>
```
::

### Ghost
::component-preview
#preview
  :::button-ghost
  :::

#code
```vue
<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <Button variant="ghost">Button</Button>
</template>
```
::

### Link
::component-preview
#preview
  :::button-link
  :::

#code
```vue
<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <Button variant="link">Button</Button>
</template>
```
::



### Icon
::component-preview
#preview
  :::button-icon
  :::

#code
```vue
<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { Mail } from "lucide-vue-next";
</script>

<template>
  <Button variant="outline" size="icon">
    <Mail class="w-4 h-4" />
  </Button>
</template>
```
::

### With Icon
::component-preview
#preview
  :::button-with-icon
  :::

#code
```vue
<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { Mail } from "lucide-vue-next";
</script>

<template>
  <Button>
    <Mail class="mr-2 h-4 w-4" /> Login with Email
  </Button>
</template>
```
::

### Loading
::component-preview
#preview
  :::button-loading
  :::

#code
```vue
<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { Loader2 } from "lucide-vue-next";
</script>

<template>
  <Button disabled>
    <Loader2 class="mr-2 h-4 w-4 animate-spin" />
    Please wait
  </Button>
</template>
```
::