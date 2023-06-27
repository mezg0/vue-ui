# Hover card
For sighted users to preview content available behind a link.

## Preview
::component-example{src="/components/content/hover-card/hover-card-preview.vue"}
#preview
  :::hover-card-preview
  :::
::


## Installation
### Copy and paste this into your project
::component-source{src="/components/ui/hover-card.tsx"}
::

## Usage
::code-block
```ts
import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/components/ui/hover-card";
```
::

::code-block
```html
<HoverCard>
  <HoverCardTrigger>
    <a href="https://vuejs.org/">Vue</a>
  </HoverCardTrigger>
  <HoverCardContent>
    The Vue Framework
  </HoverCardContent>
</HoverCard>
```
::