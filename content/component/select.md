# Select
Displays a list of options for the user to pick from—triggered by a button.

## Preview
::component-example{src="/components/content/select/select-preview.vue"}
#preview
  :::select-preview
  :::
::

## Installation
### Copy and paste this into your project
::component-source{src="/components/ui/select.tsx"}
::

## Usage
```ts
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectOption,
  SelectValue,
} from "~/components/ui/select";
```

```html
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectOption value="apple" label="Apple" />
    <SelectOption value="banana" label="Banana" />
    <SelectOption value="blueberry" label="Blueberry" />
  </SelectContent>
</Select>
```

