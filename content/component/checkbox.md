# Checkbox
A control that allows the user to toggle between checked and not checked.

## Preview
::component-example{src="/components/content/checkbox/checkbox-preview.vue"}
#preview
  :::checkbox-preview
  :::
::

## Installation
### Copy and paste this into your project
::component-source{src="/components/ui/checkbox.tsx"}
::

## Usage
```ts
import { Checkbox, CheckboxLabel } from "~/components/ui/checkbox";
```

::alert
**Note**: All checkboxes must have an `id` attribute. There is a _**[bug](https://github.com/chakra-ui/ark/issues/981)**_ with ark currently which makes it required to work correctly.
::

```html
<Checkbox id="..." v-model="...">
  <CheckboxLabel>...</CheckboxLabel>
</Checkbox>
```