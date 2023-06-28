import {
  Menu,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuPositioner,
  MenuProps,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from "@ark-ui/vue";
import { ExtendProps, cn } from "~/lib/utils";
import { Teleport, defineComponent, onMounted, ref, h } from "vue";
import { ChevronRight } from "lucide-vue-next";

const Chevron = defineComponent({
  setup() {
    return () =>
      h(ChevronRight, {
        class: "w-4 h-4 ml-auto",
      });
  },
});

const DropdownMenu = defineComponent({
  props: {} as ExtendProps<MenuProps>,
  setup(_, { slots, attrs }) {
    const key = ref("ssr");
    onMounted(() => {
      key.value = "csr";
    });
    return () => (
      <Menu key={key.value} {...attrs}>
        {slots.default?.()}
      </Menu>
    );
  },
});
const DropdownMenuTrigger = MenuTrigger;
const DropdownMenuGroup = MenuItemGroup;
const DropdownMenuSub = Menu;

const DropdownMenuContent = defineComponent({
  setup(_, { slots, attrs }) {
    return () => (
      <Teleport to="body">
        <MenuPositioner>
          <MenuContent
            class={cn(
              "z-50 min-w-[8rem] focus:outline-none overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              attrs.class ?? ""
            )}
          >
            {slots.default?.()}
          </MenuContent>
        </MenuPositioner>
      </Teleport>
    );
  },
});

const DropdownMenuItem = defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    inset: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { slots, attrs, emit }) {
    return () => (
      <MenuItem
        id={props.id}
        {...attrs}
        class={cn(
          "w-full relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[focus]:bg-accent data-[focus]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          props.inset && "pl-8",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </MenuItem>
    );
  },
});

const DropdownMenuSubTrigger = defineComponent({
  props: {
    inset: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, attrs }) {
    return () => (
      <MenuTriggerItem
        class={cn(
          "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[focus]:bg-accent data-[state=open]:bg-accent",
          props.inset && "pl-8",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
        <Chevron />
      </MenuTriggerItem>
    );
  },
});

const DropdownMenuSeparator = defineComponent({
  setup(_, { attrs }) {
    return () => (
      <MenuSeparator
        class={cn("-mx-1 my-1 h-px bg-muted", attrs.class ?? "")}
      />
    );
  },
});

const DropdownMenuGroupLabel = defineComponent({
  props: {
    for: {
      type: String,
      required: true,
    },
  },
  setup(props, { attrs, slots }) {
    return () => (
      <MenuItemGroupLabel
        htmlFor={props.for}
        class={cn(
          "block px-2 py-1.5 text-xs font-medium text-muted-foreground",
          attrs.class ?? ""
        )}
      >
        {slots.default?.()}
      </MenuItemGroupLabel>
    );
  },
});

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroupLabel,
};

