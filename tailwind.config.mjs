/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-tomato": "hsl(4, 100%, 67%)",
        "theme-dark-slate-gray": "hsl(234, 29%, 20%)",
        "theme-charcoal-gray": "hsl(235, 18%, 26%)",
        "theme-gray": "hsl(231, 7%, 60%)",
        "theme-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
