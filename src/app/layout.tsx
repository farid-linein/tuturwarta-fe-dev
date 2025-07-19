import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Pastikan Tailwind CSS diimpor di sini

// Konfigurasi Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import CSS Font Awesome
config.autoAddCss = false; // Mencegah Font Awesome menambahkan CSS secara otomatis

// Import komponen Header dan Footer yang baru dibuat
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tutur Warta",
  description: "Situs berita terkini yang informatif dan terpercaya.", // Deskripsi yang lebih relevan
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id"> {/* Ganti lang="en" menjadi "id" untuk bahasa Indonesia */}
      <body className={`${inter.className} flex flex-col min-h-screen antialiased`}> {/* antialiased untuk rendering font lebih halus */}
        <Header /> {/* Komponen Header */}
        <main className="flex-grow"> {/* Konten utama aplikasi, agar footer menempel di bawah */}
          {children}
        </main>
        <Footer /> {/* Komponen Footer */}
      </body>
    </html>
  );
}