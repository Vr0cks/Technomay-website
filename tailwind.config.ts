// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        // Süreyi 60 saniye yaptım
        marquee: 'marquee 60s linear infinite', 
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          // -50% diyerek listeyi tam yarıda başa saracağım sonsuz döngü olacak
          '100%': { transform: 'translateX(-50%)' }, 
        },
      },
    },
  },
  plugins: [],
};
export default config;