# Sheet
Extends the Dialog component to display content that complements the main content of the screen.

## Preview
::component-example{src="/components/content/sheet/sheet-preview.vue"}
#preview
 :::sheet-preview
 :::
::

## Installation
### Copy this code into your project
::component-source{src="/components/ui/sheet.tsx"}
::

## Usage
::code-block
```ts
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetCloseButton,
} from "~/components/ui/sheet";
```
::

::code-block
```html
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you sure absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```
::

## Examples

### Side

Use the side property to `<SheetContent />` to indicate the edge of the screen where the component will appear. The values can be `top`, `right`, `bottom` or `left`.

::component-example{src="/components/content/sheet/sheet-side.vue"}
#preview
 :::sheet-side
 :::
::
