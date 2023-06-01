/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                'manrope': [ "var(--weavr-font-base)"],
            },
            colors: {
                "w-base": "var(--weavr-color-base)",
                "w-primary": "var(--weavr-color-primary)",
                "w-secondary": "var(--weavr-color-secondary)",
                "w-success": "var(--weavr-color-success)",
                "w-danger": "var(--weavr-color-danger)",
                "w-warning": "var(--weavr-color-warning)",
                "w-info": "var(--weavr-color-info)",
                "w-light": "var(--weavr-color-light)",
                "w-dark": "var(--weavr-color-dark)",
            }
        },
    },
    plugins: [],
}
