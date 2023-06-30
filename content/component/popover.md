# Popover
Displays rich content in a portal, triggered by a button.

## Preview
::component-example{src="/components/content/popover/popover-preview.vue"}
#preview
  :::popover-preview
  :::
::

## Installation
### Copy and paste this into your project
::component-source{src="/components/ui/popover.tsx"}
::

## Usage
```ts
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover";
```

```html
<Popover>
  <PopoverTrigger>
    <button>Open Popover</button>
  </PopoverTrigger>
  <PopoverContent>
    <div class="p-4">Popover content</div>
  </PopoverContent>
</Popover>
```

