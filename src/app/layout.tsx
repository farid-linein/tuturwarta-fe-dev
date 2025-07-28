// src/app/layout.tsx

import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <footer className="border-t border-gray-200 mt-12 py-8">
          {/* Footer Content */}
        </footer>
      </body>
    </html>
  );
}
