<template>
  <div class="page">
    <h1>Customizable and Reusable Vue components</h1>
    <p>
      A collection of customizable Vue components built with
      <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a> and
      <a href="https://zagjs.com/" target="_blank">zagjs</a> that are designed
      to be copied and pasted into your project. This project has been heavily
      inspired by
      <a href="https://ui.shadcn.com/" target="_blank">shadcn</a> and uses the
      same design system and component structures.
    </p>

    <h2>Get started</h2>

    <Alert>
      <b>Prerequisites</b>: Components are styled with TailwindCSS and built
      using Vue 3. Make sure that your project has both of these installed
      before proceeding.
    </Alert>

    <h3>Install dependencies</h3>
    <LayoutCodeBlock content="npm i class-variance-authority" language="bash" />

    <h3>Configure tailwind.config.js</h3>
    <LayoutCodeBlock :content="tailwindConfig" language="javascript" />

    <h3>Configure styles</h3>
    <LayoutCodeBlock :content="styleConfig" language="css" />

    <p>
      You are now ready to start adding
      <NuxtLink href="/component/accordion">components</NuxtLink> to your
      project.
    </p>

    <Alert class="not-prose">
      <AlertTitle>You have a notification</AlertTitle>
      <AlertDescription> This is the description </AlertDescription>
    </Alert>

    <AlertDialog>
      <AlertDialogTrigger as-child v-slot="triggerProps">
        <Button v-bind="triggerProps">Open</Button>
      </AlertDialogTrigger>
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

    <Sheet>
      <SheetTrigger as-child v-slot="triggerProps">
        <Button v-bind="triggerProps" variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent position="left">
        <SheetHeader>
          <SheetTitle> Delete your account </SheetTitle>
          <SheetDescription>
            Are you sure? This will permanently delete your account.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose>Save</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

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

    <Badge variant="secondary">Hello</Badge>
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

import Sheet, {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "~/components/sheet.vue";

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
`;

const styleConfig = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
  }
}
`;
</script>

