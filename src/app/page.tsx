// src/app/page.tsx
// Ini adalah halaman root (beranda) Anda.

// Tidak perlu import globals.css di sini, karena sudah diimport di layout.tsx

// Jika Anda ingin menggunakan komponen, import di sini:
// import ArticleCard from '@/components/common/ArticleCard';
// import HeroSection from '@/components/common/HeroSection';

export default function HomePage() {
  return (
    <div className="py-8"> {/* Contoh padding vertikal untuk konten halaman */}
      <h1 className="text-4xl font-bold text-center mb-6">Selamat Datang di Tutur Warta</h1>
      <p className="text-center text-lg text-gray-700">Berita terkini dan terpercaya dari berbagai kategori.</p>

      {/* Di sini nanti kita akan menambahkan komponen-komponen untuk halaman beranda,
          seperti HeroSection, daftar artikel terbaru, sidebar, dll.
          Misalnya:
          <HeroSection />
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Berita Terbaru</h2>
              {/* <ArticleCard ... /> */ /*}
            </div>
            <aside className="md:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">Populer</h2>
              {/* <SidebarAds ... /> */ /*}
            </aside>
          </section>
      */}
    </div>
  );
}