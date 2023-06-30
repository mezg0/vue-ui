# Card

Displays a card with header, content, and footer.

## Preview
::component-example{src="/components/content/card/card-preview.vue"}
#preview
  :::card-preview
  :::
::

## Installation

### Copy and paste this into your project

::component-source{src="/components/ui/card.tsx"}
::

## Usage
```ts
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
```

```html
<Card>
  <CardHeader>
    <CardTitle>...</CardTitle>
    <CardDescription>...</CardDescription>
  </CardHeader>
  <CardContent>
    ...
  </CardContent>
  <CardFooter>
    ..
  </CardFooter>
</Card>
```