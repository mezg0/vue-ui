<script setup lang="ts">
import Accordion, {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/accordion.vue";

const { data } = await useFilesource("accordion");

const importString = `import Accordion, {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/accordion.vue";`;
const usageString = `<Accordion type="single" collapsible class="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other
      components' aesthetic.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

const previewString = `import Accordion, {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/accordion.vue";

<Accordion type="single" collapsible class="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components'
      aesthetic.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;
</script>

<template>
  <div class="page">
    <h1>Accordion</h1>
    <p>
      A vertically stacked set of interactive headings that each reveal a
      section of content.
    </p>

    <LayoutComponentPreview :preview-code="previewString">
      <Accordion type="single" collapsible class="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components'
            aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </LayoutComponentPreview>

    <h2>Installation</h2>
    <h3>Install the dependencies</h3>
    <LayoutCodeBlock
      content="npm install @zag-js/accordion @zag-js/vue"
      language="bash"
    />

    <h3>Copy and paste this into your project</h3>
    <LayoutCodeBlock v-if="data" :content="data" language="vue" />

    <h3>Usage</h3>
    <LayoutCodeBlock :content="importString" language="javascript" />
    <LayoutCodeBlock :content="usageString" language="vue" />
  </div>
</template>

