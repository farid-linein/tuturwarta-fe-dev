// src/app/layout.tsx

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <title>Tutur Warta | Berita Terkini</title>
      </head>
      <body className="bg-white min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
