import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    cotv: defineCollection({
      type: 'page',
      source: {
        include: "cotv/**.md",
        prefix: '/'
      }
    })
  }
})