# Button
Displays a button or a component that looks like a button.

## Preview
::component-example{src="/components/content/button/button-preview.vue"}
#preview
  :::button-preview
  :::
::


## Installation
## Copy and paste this into your project

::component-source{src="/components/ui/button.tsx"}
::

## Usage
```ts
import { Button } from "~/components/ui/button";
```

```html
<Button variant="secondary">Button</Button>
```

### Link
You can use the `buttonVariants` helper to create a link that looks like a button.

```ts
import { buttonVariants } from "~/components/ui/button"
```

```html
<Link class="buttonVariants({ variant: 'outline' })">Click here</Link>
```

Alternatively, you can set the `asChild` parameter and nest the link component.

```html
<Button as-child>
  <Link href="/login">Login</Link>
</Button>
```

## Examples

### Default
::component-example{src="/components/content/button/button-default.vue"}
#preview
  :::button-default
  :::
::

### Secondary
::component-example{src="/components/content/button/button-secondary.vue"}
#preview
  :::button-secondary
  :::
::
### Destructive
::component-example{src="/components/content/button/button-destructive.vue"}
#preview
  :::button-destructive
  :::
::

### Outline
::component-example{src="/components/content/button/button-outline.vue"}
#preview
  :::button-outline
  :::
::

### Ghost
::component-example{src="/components/content/button/button-ghost.vue"}
#preview
  :::button-ghost
  :::
::

### Link
::component-example{src="/components/content/button/button-link.vue"}
#preview
  :::button-link
  :::
::



### Icon
::component-example{src="/components/content/button/button-icon.vue"}
#preview
  :::button-icon
  :::
::

### With Icon
::component-example{src="/components/content/button/button-with-icon.vue"}
#preview
  :::button-with-icon
  :::
::

### Loading
::component-example{src="/components/content/button/button-loading.vue"}
#preview
  :::button-loading
  :::
::
