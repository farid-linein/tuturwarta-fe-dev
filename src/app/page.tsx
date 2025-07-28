// src/app/page.tsx

import AdBanner from "./components/AdBanner";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Main Ads Banner */}
      <AdBanner />

      {/* Hero Section */}
      <HeroSection />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Main Content (3/4 lebar) */}
        <div className="md:col-span-3 space-y-6">
          {/* Artikel Terkini */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Konten artikel */}
          </div>

          {/* Artikel Lainnya */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Daftar artikel terkait */}
          </div>
        </div>

        {/* Sidebar (1/4 lebar) */}
        <Sidebar />
      </div>
    </div>
  );
}
