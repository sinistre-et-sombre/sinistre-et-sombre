<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('cotv').path('/introduction').first())

const { data : ct} = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('cotv')

})
</script>

<template>
    <div class="flex h-screen">
        <div class="w-1/5 overflow-auto">
            <div v-for="item in ct">
                <a>{{ item.title }}</a>
            </div>    
        </div>
        <div class="w-full overflow-auto">
            <ContentRenderer v-if="home" :value="home" />
            <div v-else>Home not found</div>
        </div>
    </div>
</template>

<style lang="css">
h1 {
    @apply text-5xl;
}
</style>