<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page non trouvée",
    fatal: true,
  });
}
</script>

<template>
  <article class="prose dark:prose-invert">
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>
