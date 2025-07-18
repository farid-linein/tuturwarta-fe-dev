// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Ini penting jika kode Anda di folder src
  ],
  theme: {
    extend: {
      colors: { // Anda bisa tambahkan warna kustom di sini
        'octo-mobile-red': '#DD2C00',
        'top-nav-gradient-start': '#4F46E5',
        'top-nav-gradient-end': '#1F2937',
      }
    },
  },
  plugins: [],
};
export default config;