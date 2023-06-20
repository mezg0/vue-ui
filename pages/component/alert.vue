<template>
  <div class="page">
    <h1>Alert</h1>
    <p>Displays a callout for user attention.</p>

    <LayoutComponentPreview :preview-code="previewString">
      <Alert>
        <Mail class="h-4 w-4" />
        <AlertTitle> You have mail </AlertTitle>
        <AlertDescription> Maybe you should check it </AlertDescription>
      </Alert>
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

<script setup lang="ts">
import { Mail } from "lucide-vue-next";
import Alert, { AlertDescription, AlertTitle } from "~/components/alert.vue";

const { data } = useFilesource("alert");

const importString = `import Alert, { AlertDescription, AlertTitle } from "~/components/alert.vue";`;
const usageString = `<Alert>
  <AlertTitle> You have mail </AlertTitle>
  <AlertDescription> Maybe you should check it </AlertDescription>
</Alert>`;

const previewString = `import { Mail } from "lucide-vue-next";
import Alert, { AlertDescription, AlertTitle } from "~/components/alert.vue";

<Alert>
  <Mail class="h-4 w-4" />
  <AlertTitle> You have mail </AlertTitle>
  <AlertDescription> Maybe you should check it </AlertDescription>
</Alert>`;
</script>

