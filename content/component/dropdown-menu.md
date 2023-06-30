# Dropdown menu

## Preview

::component-example{src="/components/content/dropdown-menu/dropdown-menu-preview.vue"}
#preview
 :::dropdown-menu-preview
 :::
::

## Installation
### Copy and paste this into your project
::component-source{src="/components/ui/dropdown-menu.tsx"}
::

## Usage
```ts
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubTrigger,
  DropdownMenuSub,
} from "~/components/ui/dropdown-menu";
```

::alert
**Note**: All dropdown menu items must have an `id` attribute. This is used to identify item is clicked through the `@select` event.
::

```html
<DropdownMenu @select="(...)">
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem id="profile">Profile</DropdownMenuItem>
     <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <UserPlus class="mr-2 h-4 w-4" />
        Invite users
      </DropdownMenuSubTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem id="email">
          Email
        </DropdownMenuItem>
        <DropdownMenuItem id="chat">
          Chat
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem id="more">
          More
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>
```