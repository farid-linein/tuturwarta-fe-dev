// src/app/(main)/page.tsx

import Sidebar from "@/components/layout/Sidebar";
import HeroSection from "@/components/sections/HeroSection";
import ArticleCard from "@/components/ui/ArticleCard";
import { getArticles } from "@/lib/data";

// Komponen placeholder untuk iklan
const AdBanner = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex items-center justify-center bg-gray-200 text-gray-500 rounded-md ${className}`}
    >
      <p>Iklan</p>
    </div>
  );
};

export default async function HomePage() {
  const articles = await getArticles();

  return (
    // Wrapper utama yang menengahkan semua konten.
    // Ini menggantikan div 'Home' Anda.
    <div className="container mx-auto px-4 py-8">
      {/* 1. Slot untuk Iklan Utama (mainAds) */}
      <section aria-label="Iklan Utama" className="mb-8">
        <AdBanner className="h-[155px]" />
      </section>

      {/* 2. Canvas Konten Utama */}
      <div className="space-y-8">
        {/* a. Hero Section */}
        <section aria-labelledby="hero-title">
          <h2 id="hero-title" className="sr-only">
            Berita Utama
          </h2>
          <HeroSection />
        </section>

        {/* b. Layout Grid untuk Konten Utama dan Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Kolom Kiri: Main Content (memakan 8 dari 12 kolom) */}
          <div className="lg:col-span-8 space-y-8">
            <section aria-labelledby="latest-news-title">
              <h2
                id="latest-news-title"
                className="text-2xl font-bold text-gray-800 border-b-4 border-blue-600 pb-2 mb-6"
              >
                Berita Terbaru
              </h2>
              <div className="space-y-6">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          </div>

          {/* Kolom Kanan: Side Content (memakan 4 dari 12 kolom) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-[100px] space-y-8">
              {" "}
              {/* top-[100px] adalah tinggi perkiraan header */}
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
