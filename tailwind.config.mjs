/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "sad-tomato": "hsl(4, 100%, 67%)",
        "sad-dark-slate-grey": "hsl(234, 29%, 20%)",
        "sad-charcoal-grey": "hsl(235, 18%, 26%)",
        "sad-grey": "hsl(231, 7%, 60%)",
        "sad-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
