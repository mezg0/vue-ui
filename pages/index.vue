<template>
  <div>
    <h1>Installation</h1>
    <p>How to install required dependencies and structure your app</p>

    <p>
      Prerequisites: Components are styled using Tailwind CSS. You need to
      install Tailwind CSS in your project. Follow the Tailwind CSS installation
      instructions to get started.
    </p>

    <p>Add dependencies:</p>
    <Button variant="outline">Hello</Button>
    <NuxtLink :class="buttonVariants({ variant: 'destructive' })">
      TEST
    </NuxtLink>

    <Alert>
      <AlertTitle>You have a notification</AlertTitle>
      <AlertDescription> This is the description </AlertDescription>
    </Alert>

    <AlertDialog>
      <AlertDialogTrigger> Open </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle> Delete your account </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure? This will permanently delete your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
<script setup lang="ts">
import Alert, { AlertDescription, AlertTitle } from "~/components/alert.vue";
import { buttonVariants } from "~/components/button.vue";
import AlertDialog, {
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "~/components/alert-dialog.vue";

import Accordion, {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/accordion.vue";
</script>

