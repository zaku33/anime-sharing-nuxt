// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
   vite: {
    /* options for vite */
    // ssr: true // enable unstable server-side rendering for development (false by default)
    // experimentWarning: false // hide experimental warning message (disabled by default for tests)
    vue: {
      /* options for vite-plugin-vue2 */
    },
  }
})
