<script setup lang="ts">
import { Button } from "~/components/ui/button";
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
</script>

<template>
  <Sheet>
    <SheetTrigger>Open</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you sure absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <SheetCloseButton>
          <Button>Save</Button>
        </SheetCloseButton>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

