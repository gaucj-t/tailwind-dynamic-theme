// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [ '@nuxtjs/tailwindcss' ],
    tailwindcss: {
        cssPath: '~/assets/css/main.css'
    },
    ssr: false,
    app: {
        head: {
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com"
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: ''
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
                }
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                { children: 'JavaScript is required' }
            ]
        }
    }

})
