// src/lib/data.ts

import type { Article, Author, Category } from "@/types";

// Mock data untuk entitas terkait
const MOCK_AUTHOR_ANDI: Author = {
  id: "uuid-author-1",
  username: "andipratama",
  full_name: "Andi Pratama",
  photo_url: null,
};
const MOCK_CATEGORY_TEKNOLOGI: Category = {
  id: "uuid-category-1",
  nama: "Teknologi",
  slug: "teknologi",
};

// Mock data artikel dengan struktur baru yang nested
const MOCK_ARTICLES: Article[] = [
  {
    id: "uuid-article-1",
    slug: "revolusi-ai-generatif-mengubah-industri-kreatif",
    judul:
      "Revolusi AI Generatif: Bagaimana Teknologi Mengubah Industri Kreatif",
    ringkasan:
      "AI generatif seperti DALL-E 2 dan GPT-4 tidak lagi hanya menjadi alat bantu, melainkan mitra kolaboratif bagi para seniman, penulis, dan desainer.",
    isi: "<p>Ini adalah isi lengkap dari artikel tentang AI Generatif...</p>",
    gambar_utama_url:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
    tanggal_publikasi: "2025-07-22T10:00:00Z",
    views_count: 1250,
    kategori: MOCK_CATEGORY_TEKNOLOGI,
    penulis: MOCK_AUTHOR_ANDI,
    tags: [
      { id: "uuid-tag-1", nama: "AI", slug: "ai" },
      { id: "uuid-tag-2", nama: "Inovasi", slug: "inovasi" },
    ],
  },
  // ... Tambahkan artikel mock lainnya dengan struktur yang sama
];

// Fungsi ini mensimulasikan panggilan API
export const getArticles = async (): Promise<Article[]> => {
  console.log("Fetching articles with new data structure...");
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_ARTICLES;
};

// Fungsi baru untuk mendapatkan satu artikel berdasarkan slug
export const getArticleBySlug = async (
  slug: string
): Promise<Article | null> => {
  console.log(`Fetching article with slug: ${slug}`);
  await new Promise((resolve) => setTimeout(resolve, 500));
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);
  return article || null;
};
