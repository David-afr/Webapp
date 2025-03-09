import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        celeste: 'var(--celeste)',
        verde: 'var(--verde)',
      },
      fontFamily: {
        titulo: 'Insanibu !important'
      },
      padding: {
        globalX: "165px",
        globalY: '60px',
        iniSectionX: '230px',
        initSectionY: '130px',
        initPage: '170px'
      },
      fontSize: {
        titulo: '50px',
        semisubtitulo: '22px',
        subtitulo: '33px'
      }
    },

  },
  plugins: [],
} satisfies Config;
