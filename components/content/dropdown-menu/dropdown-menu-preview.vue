<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSubTrigger,
  DropdownMenuSub,
  DropdownMenuSeparator,
  DropdownMenuGroupLabel,
} from "~/components/ui/dropdown-menu";

import { Button } from "~/components/ui/button";
import {
  User2,
  CreditCard,
  Settings,
  Keyboard,
  Settings2,
  Plus,
  UserPlus,
} from "lucide-vue-next";
import { Mail, MessageSquare } from "lucide-vue-next";
import { PlusCircle } from "lucide-vue-next";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="outline">Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup id="account">
        <DropdownMenuGroupLabel for="account"> Account </DropdownMenuGroupLabel>
        <DropdownMenuItem id="profile">
          <User2 class="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem id="billing">
          <CreditCard class="mr-2 h-4 w-4" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem id="settings">
          <Settings class="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem id="shortcuts">
          <Keyboard class="mr-2 h-4 w-4" />
          Keyboard shortcuts
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <!-- <DropdownMenuSeparator /> -->
      <DropdownMenuGroup id="team">
        <DropdownMenuGroupLabel for="team"> Team </DropdownMenuGroupLabel>
        <DropdownMenuItem id="team-settings">
          <Settings2 class="mr-2 h-4 w-4" />
          Team settings
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <UserPlus class="mr-2 h-4 w-4" />
            Invite users
          </DropdownMenuSubTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem id="invite-email">
              <Mail class="mr-2 h-4 w-4" />
              Email
            </DropdownMenuItem>
            <DropdownMenuItem id="invite-chat">
              <MessageSquare class="mr-2 h-4 w-4" />
              Chat
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem id="invite-more">
              <PlusCircle class="mr-2 h-4 w-4" />
              More
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuSub>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
