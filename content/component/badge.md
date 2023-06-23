# Badge
Displays a badge or a component that looks like a badge.

## Preview
::component-example{src="/components/content/badge/badge-preview.vue"}
#preview
  :::badge-preview
  :::
::



## Installation
### Copy and paste this into your project

::component-source{src="/components/ui/badge.tsx"}
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
::component-example{src="/components/content/badge/badge-default.vue"}
#preview
  :::badge-default
  :::
::

### Secondary
::component-example{src="/components/content/badge/badge-secondary.vue"}
#preview
  :::badge-secondary
  :::
::

### Outline
::component-example{src="/components/content/badge/badge-outline.vue"}
#preview
  :::badge-outline
  :::
::

### Destructive
::component-example{src="/components/content/badge/badge-destructive.vue"}
#preview
  :::badge-destructive
  :::
::