<template>
  <div class="pl-1">
    <div>
      <LinkWrapper :close-trigger="isSheet" href="/">Get Started</LinkWrapper>
    </div>
    <div class="flex flex-col mt-4" v-if="navigation?.[0]?.children">
      <LinkWrapper
        v-for="link in navigation[0].children"
        :href="link._path"
        :close-trigger="isSheet"
      >
        {{ link.title }}
      </LinkWrapper>
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
              "h-8 justify-start pl-0 [&.router-link-exact-active]:opacity-100 opacity-50"
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
            "h-8 justify-start pl-0 [&.router-link-exact-active]:opacity-100 opacity-50"
          )}
          href={href}
        >
          {slots.default?.()}
        </NuxtLink>
      );
  },
});
</script>

