# Toast
A succinct message that is displayed temporarily.

## Preview
::component-example{src="/components/content/toast/toast-preview.vue"}
#preview
  :::toast-preview
  :::
::

## Installation
### Copy and paste this into your project
::component-source{src="/components/ui/toast.tsx"}
::

### Wrap your app in the `ToastProvider`.
```ts
import { ToastProvider } from "~/components/ui/toast";
```

```html
<ToastProvider>
  <App />
</ToastProvider>
```

## Usage
```ts
import { useToast } from "~/components/ui/toast";
```

```ts
const toast = useToast();
toast({
  type:"error",
  title: "Hello world",
  description: "This is a toast message",
  status: "success",
  duration: 5000,
})
```
