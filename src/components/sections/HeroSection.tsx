import { getArticles } from "@/lib/data"; // Kita gunakan data mock dulu
import type { Article } from "@/types";
import Link from "next/link";

// Komponen internal untuk kartu artikel di hero section
function HeroArticleCard({
  article,
  isMain = false,
}: {
  article: Article;
  isMain?: boolean;
}) {
  if (isMain) {
    return (
      // Kartu Utama (Tengah)
      <Link
        href={`/${article.kategori.slug}/${article.slug}`}
        className="relative block col-span-12 lg:col-span-8 h-96 group"
      >
        <img
          src={article.gambar_utama_url || ""}
          alt={article.judul}
          className="absolute inset-0 w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-md"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <span className="text-sm font-semibold bg-blue-600 px-2 py-1 rounded">
            {article.kategori.nama}
          </span>
          <h2 className="mt-2 text-2xl lg:text-3xl font-bold group-hover:underline">
            {article.judul}
          </h2>
          <p className="mt-2 text-sm opacity-90 hidden md:block">
            {article.ringkasan}
          </p>
        </div>
      </Link>
    );
  }

  return (
    // Kartu Pendukung (Samping)
    <Link
      href={`/${article.kategori.slug}/${article.slug}`}
      className="relative block h-44 lg:h-full group"
    >
      <img
        src={article.gambar_utama_url || ""}
        alt={article.judul}
        className="absolute inset-0 w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 bg-black/50 rounded-md"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-md font-bold group-hover:underline">
          {article.judul}
        </h3>
      </div>
    </Link>
  );
}

const HeroSection = async () => {
  // SIMULASI: Seolah-olah kita fetch data dari beberapa placement slot
  // Ambil 4 artikel pertama dari mock data kita
  const allArticles = await getArticles();
  const mainArticle = allArticles[0];
  const sideArticles = allArticles.slice(1, 3); // Ambil 2 artikel berikutnya

  if (!mainArticle) {
    return null; // Jangan render apa-apa jika tidak ada artikel
  }

  return (
    <section aria-labelledby="hero-title">
      <h2 id="hero-title" className="sr-only">
        Berita Utama
      </h2>
      <div className="grid grid-cols-12 gap-4">
        {/* Artikel Utama */}
        <HeroArticleCard article={mainArticle} isMain={true} />

        {/* Artikel Pendukung di Samping */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          {sideArticles.map((article) => (
            <HeroArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
