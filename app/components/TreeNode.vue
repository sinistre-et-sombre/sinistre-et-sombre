<script lang="ts" setup>
import type { ContentNavigationItem } from "@nuxt/content";
const route = useRoute();

const props = defineProps<{
  item: ContentNavigationItem;
}>();

const isCurrentRoute = (path: string) =>
  route.path === path || route.path.startsWith(`${path}/`);

const children = computed(() =>
  (props.item.children ?? []).filter((child) => child.path !== props.item.path),
);

const isOpen = ref(isCurrentRoute(props.item.path));
</script>

<template>
  <ul class="space-y-1">
    <li>
      <div class="flex items-center gap-1">
        <button
          v-if="children.length"
          type="button"
          class="w-4 text-xs text-gray-500"
          :aria-label="isOpen ? 'Replier' : 'Déplier'"
          @click="isOpen = !isOpen"
        >
          {{ isOpen ? "▾" : "▸" }}
        </button>

        <NuxtLink
          :to="item.path"
          :class="item.path === route.path ? 'font-semibold underline' : ''"
        >
          {{ item.title }}
        </NuxtLink>
      </div>

      <ul v-if="children.length && isOpen" class="ml-4 mt-1 space-y-1">
        <TreeNode v-for="child in children" :key="child.path" :item="child" />
      </ul>
    </li>
  </ul>
</template>
