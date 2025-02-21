import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'arial', 'sans-serif'], // New font family
        serif: ['Old Standard TT', 'serif'],
        mono: ['SFMono-Regular', 'monospace'], // New mono font
        oswald: ['Oswald', 'sans-serif'],
        ramaraja: ['Ramaraja', 'serif'],
        geist: ['Geist', 'sans-serif'],
        honk: ['var(--font-honk)'],
        Advent_Pro: ['var(--font-advent-pro)'],
        italiana: ['Italiana', 'serif'],
      },
      colors: {
        primary: '#0077B6', // New primary color
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
