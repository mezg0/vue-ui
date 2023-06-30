# Accordion

A modal dialog that interrupts the user with important content and expects a response.


## Preview
::component-example{src="/components/content/accordion/accordion-preview.vue"}
#preview
  :::accordion-preview
  :::
::

## Installation

### Copy and paste this into your project
::component-source{src="/components/ui/accordion.tsx"}
::

## Usage
```ts
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
```

```html
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```
