<template>
  <div class="pl-1">
    <div>
      <LinkWrapper :close-trigger="isSheet" href="/">Get Started</LinkWrapper>
    </div>
    <div class="flex flex-col mt-4" v-if="navigation?.[0]?.children">
      <template v-for="link in navigation[0].children">
        <span
          aria-disabled="true"
          class=""
          :class="
            cn(
              buttonVariants({ variant: 'link' }),
              'cursor-not-allowed text-muted-foreground opacity-50 w-max py-2 pl-0'
            )
          "
          v-if="link._draft"
        >
          {{ link.title }}
        </span>
        <LinkWrapper v-else :href="link._path" :close-trigger="isSheet">
          {{ link.title }}
        </LinkWrapper>
      </template>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { buttonVariants } from "~/components/ui/button";
import { SheetCloseButton } from "~/components/ui/sheet";
import { cn } from "~/lib/utils";

defineProps<{
  navigation: {
    title: string;
    children: {
      title: string;
      _path: string;
      _draft?: boolean;
    }[];
  }[];
  isSheet?: boolean;
}>();

const LinkWrapper = defineComponent({
  props: {
    closeTrigger: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
    },
  },
  setup({ closeTrigger, href }, { slots }) {
    return () =>
      closeTrigger ? (
        <SheetCloseButton>
          <NuxtLink
            class={cn(
              buttonVariants({ variant: "link" }),
              "py-2 justify-start pl-0 [&.router-link-exact-active]:opacity-100 opacity-75"
            )}
            href={href}
          >
            {slots.default?.()}
          </NuxtLink>
        </SheetCloseButton>
      ) : (
        <NuxtLink
          class={cn(
            buttonVariants({ variant: "link" }),
            "py-2 justify-start pl-0 [&.router-link-exact-active]:opacity-100 opacity-75"
          )}
          href={href}
        >
          {slots.default?.()}
        </NuxtLink>
      );
  },
});
</script>

