# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.


## Preview
::component-example{src="/components/content/alert-dialog/alert-dialog-preview.vue"}
#preview
  :::alert-dialog-preview
  :::
::

## Installation

### Copy and paste this into your project
::component-source{src="/components/ui/alert-dialog.tsx"}
::

## Usage
```ts
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogFooter,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
```

```html
<AlertDialog>
  <AlertDialogTrigger>
    <Button>Open</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

