// src/components/ui/ArticleCard.tsx

import type { Article } from "@/types";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="flex space-x-4 group">
      {/* Gambar */}
      <div className="flex-shrink-0 w-1/3">
        <Link
          href={`/${article.kategori.slug}/${article.slug}`}
          className="block relative aspect-video rounded-md overflow-hidden"
        >
          {article.gambar_utama_url && (
            <Image
              src={article.gambar_utama_url}
              alt={article.judul}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </Link>
      </div>

      {/* Konten Teks */}
      <div className="flex-1">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <Link
            href={`/kategori/${article.kategori.slug}`}
            className="font-semibold text-blue-600 uppercase hover:underline"
          >
            {article.kategori.nama}
          </Link>
          <time dateTime={article.tanggal_publikasi}>
            {format(new Date(article.tanggal_publikasi), "dd MMM yyyy", {
              locale: id,
            })}
          </time>
        </div>
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          <Link href={`/${article.kategori.slug}/${article.slug}`}>
            {article.judul}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {article.ringkasan}
        </p>
        <p className="text-xs text-gray-500 mt-3">
          Oleh {article.penulis.full_name}
        </p>
      </div>
    </article>
  );
};

export default ArticleCard;
