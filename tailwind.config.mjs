import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
        m6x11: ["m6x11", ...defaultTheme.fontFamily.sans]
      },
      aspectRatio: {
        'playing-card': '1/1.4',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
