import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1300px',
        '4xl': '1600px',
        '5xl': '1800px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        celeste: 'var(--celeste)',
        celesteClaro: '#eff5fb',
        verde: 'var(--verde)',
        transparentT: 'var(--transparentT)',
        verdeAgua: '#b7cc18'
      },
      fontFamily: {
        titulo: 'Insanibu !important'
      },
      padding: {
        globalY: '3.1vw',
        iniSectionX: '10vw',
        initSectionY: '6.8vw',
        initPage: '10.4vw'
      },
      fontSize: {
        titulo: '2.9vw',
        semititulo: '1.9vw',
        semisubtitulo: '1.15vw',
        subtitulo: '1.74vw'
      }
    },

  },
  plugins: [],
} satisfies Config;
