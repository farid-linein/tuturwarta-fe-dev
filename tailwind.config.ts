import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Di sini kita mendefinisikan container kustom kita
    container: {
      center: true, // Membuat container otomatis center-aligned (mx-auto)
      padding: "1rem", // Memberi padding default di sisi kiri dan kanan (16px)
      screens: {
        "2xl": "1248px", // Menetapkan lebar maksimum container menjadi 1248px
      },
    },
    extend: {
      // Kita bisa menambahkan ekstensi lain di sini nanti
    },
  },
  plugins: [],
};
export default config;
