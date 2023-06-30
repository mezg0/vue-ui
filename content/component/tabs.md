# Tabs
A set of layered sections of content—known as tab panels—that are displayed one at a time.

## Preview
::component-example{src="/components/content/tabs/tabs-preview.vue"}
#preview
  :::tabs-preview
  :::
::

## Installation
### Copy this code into your project
::component-source{src="/components/ui/tabs.tsx"}
::

## Usage
```ts
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

```

```html
<Tabs default-value="one">
  <TabsList>
    <TabsTrigger value="one">Tab 1</TabsTrigger>
    <TabsTrigger value="two">Tab 2</TabsTrigger>
    <TabsTrigger value="three">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="one">Tab 1 content</TabsContent>
  <TabsContent value="two">Tab 2 content</TabsContent>
  <TabsContent value="three">Tab 3 content</TabsContent>
</Tabs>
```