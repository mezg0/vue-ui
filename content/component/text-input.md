# Text input
Displays an input with an optional label, description and error message.

## Preview
::component-example{src="/components/content/text-input/text-input-preview.vue"}
#preview
  :::text-input-preview
  :::
::

## Usage

```ts
import { TextInput } from '~/components/ui/text-input';
```

```html
<TextInput
  label="Email"
  description="Your personal email address"
  error="..."
  v-model="..."
/>
```

## Examples

### With an error
::component-example{src="/components/content/text-input/text-input-error.vue"}
#preview
  :::text-input-error
  :::
::