// src/app/page.tsx

import { AdsBanner } from "./components/AdsBanner";
import { HeroSection } from "./components/HeroSection";
import { Sidebar } from "./components/Sidebar";

export default async function HomePage() {
  // Fetch data dari backend (implementasi sesuai skema database)
  const [featuredArticles, trendingArticles] = await Promise.all([
    getFeaturedArticles(),
    getTrendingArticles(),
  ]);

  return (
    <>
      <AdsBanner />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Konten Utama */}
        <div className="lg:col-span-3">
          <HeroSection articles={featuredArticles} />
          <div className="space-y-8">
            {trendingArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </>
  );
}
