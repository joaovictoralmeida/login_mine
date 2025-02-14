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
      },
      screens: {
        'smm': {'max': '500px'}, // máximo até 639px
        'sm': {'max': '677px'}, // máximo até 639px
        'ms': {'min': '1360px'}, // máximo até 639px
        'md': {'max': '620px'}, // máximo até 767px
        'mdd': {'max': '500px'}, // máximo até 767px
        'lg': {'max': '930px'},
        'lgm': {'max': '800px'},
        'mac': {'max': '1250px'}, // máximo até 1023px
        'macc': {'max': '1050px'}, // máximo até 1023px
        'rs': {'max': '1322px'}, // máximo até 1279px
        'rss': {'max': '1380px'}, // máximo até 1279px
        'lgg': {'max': '1474px'}, // máximo até 1535px
        'lgp': {'max': '1104px'}, // máximo até 1535px
        'lgpp': {'max': '1550px'}, // máximo até 1535px
      },
      fontFamily: {
        kufam: ["Kufam"],
      },
    },
  },
  plugins: [],
} satisfies Config;
