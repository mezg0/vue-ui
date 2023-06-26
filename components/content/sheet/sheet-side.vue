<script setup lang="ts">
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
import { Button } from "~/components/ui/button";

const sides = ["left", "right", "top", "bottom"] as const;
</script>

<template>
  <div className="grid grid-cols-2 gap-2">
    <Sheet v-for="side in sides">
      <SheetTrigger>
        {{ side }}
      </SheetTrigger>
      <SheetContent :side="side">
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
  </div>
</template>

