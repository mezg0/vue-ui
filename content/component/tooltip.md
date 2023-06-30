# Tooltip
A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

## Preview
::component-example{src="/components/content/tooltip/tooltip-preview.vue"}
#preview
  :::tooltip-preview
  :::
::
 

## Installation
### Copy and paste this into your project
::component-source{src="/components/ui/tooltip.tsx"}
::

## Usage
::code-block
```ts
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip";
```
::

::code-block
```html
<Tooltip>
  <TooltipTrigger>
    <button>Hover me</button>
  </TooltipTrigger>
  <TooltipContent>
    Tooltip content
  </TooltipContent>
</Tooltip>
```
::