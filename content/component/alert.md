# Alert

Displays a callout for user attention.

## Preview
::component-example{src="/components/content/alert/alert-preview.vue"}
#preview
  :::alert-default
  :::
::

## Installation

### Copy and paste this into your project
::component-source{src="/components/ui/alert-dialog.tsx"}
::

## Usage
::code-block
```ts
import {Alert, AlertTitle, AlertDescription} from '~/components/ui/alert.vue';
```
::

::code-block
```html
<Alert>
  <AlertTitle>You have mail</AlertTitle>
  <AlertDescription>You should read it.</AlertDescription>
</Alert>
```
::

## Examples

## Default
::component-example{src="/components/content/alert/alert-default.vue"}
#preview
  :::alert-default
  :::
::


## Destructive
::component-example{src="/components/content/alert/alert-destructive.vue"}
#preview
  :::alert-destructive
  :::
::

