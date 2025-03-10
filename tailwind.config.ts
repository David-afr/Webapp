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
        globalX: "165px",
        globalY: '60px',
        iniSectionX: '230px',
        initSectionY: '130px',
        initPage: '190px'
      },
      fontSize: {
        titulo: '55px',
        semititulo: '38px',
        semisubtitulo: '22px',
        subtitulo: '33px'
      }
    },

  },
  plugins: [],
} satisfies Config;
