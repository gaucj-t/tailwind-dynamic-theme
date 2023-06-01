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
                'manrope': [ "var(--xxx-font-base)"],
            },
            colors: {
                "xxx-base": "var(--xxx-color-base)",
                "xxx-primary": "var(--xxx-color-primary)",
                "xxx-secondary": "var(--xxx-color-secondary)",
                "xxx-success": "var(--xxx-color-success)",
                "xxx-danger": "var(--xxx-color-danger)",
                "xxx-warning": "var(--xxx-color-warning)",
                "xxx-info": "var(--xxx-color-info)",
                "xxx-light": "var(--xxx-color-light)",
                "xxx-dark": "var(--xxx-color-dark)",
            }
        },
    },
    plugins: [],
}
