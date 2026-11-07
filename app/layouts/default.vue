<script lang="ts" setup>
import type { ContentNavigationItem } from "@nuxt/content";

const route = useRoute();

const { data: nav } = await useAsyncData("main-navigation", () =>
  queryCollectionNavigation("content"),
);

const links = nav.value ?? [];

const isOpen = ref(false);

const findSectionRoot = (
  nodes: ContentNavigationItem[],
  path: string,
): ContentNavigationItem | undefined => {
  return nodes.find(
    (node) => path === node.path || path.startsWith(`${node.path}/`),
  );
};

const activeSection = computed(() => {
  const root = nav.value && findSectionRoot(nav.value, route.path);
  if (!root) return null;

  const realChildren = (root.children ?? []).filter(
    (child) => child.path !== root.path,
  );
  return realChildren.length ? root : null;
});
</script>

<template>
  <div class="min-h-screen bg-sky-950">
    <header class="border-b">
      <div class="flex md:items-center gap-6 px-6 py-4 flex-col md:flex-row">
        <button
          type="button"
          class="flex flex-col gap-1.5 md:hidden"
          @click="isOpen = !isOpen"
        >
          <span class="block h-0.5 w-6 bg-white" />
          <span class="block h-0.5 w-6 bg-white" />
          <span class="block h-0.5 w-6 bg-white" />
        </button>

        <nav
          :class="[
            isOpen ? 'flex' : 'hidden',
            'flex-col gap-3 border-t px-6 py-4',
            'md:flex md:flex-row md:gap-6 md:border-t-0 md:px-0 md:py-0 text-white',
          ]"
        >
          <NuxtLink
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            @click="isOpen = false"
          >
            {{ link.title }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <div class="flex flex-col md:flex-row">
      <aside
        v-if="activeSection"
        class="border-b p-4 text-sm md:w-64 md:shrink-0 md:border-b-0 md:border-r text-white"
      >
        <TreeNode :item="activeSection" />
      </aside>

      <main class="flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>
