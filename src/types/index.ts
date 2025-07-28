// src/types/index.ts

// Tipe untuk data yang diserialisasi dari model Kategori Django
export interface Category {
  id: string; // UUID akan menjadi string
  nama: string;
  slug: string;
}

// Tipe untuk data yang diserialisasi dari model Pengguna Django (hanya data publik)
export interface Author {
  id: string;
  username: string;
  full_name: string | null;
  photo_url: string | null;
}

// Tipe untuk data yang diserialisasi dari model Tag Django
export interface Tag {
  id: string;
  nama: string;
  slug: string;
}

// Blueprint utama untuk Artikel, sekarang jauh lebih detail
export interface Article {
  id: string;
  slug: string;
  judul: string;
  ringkasan: string | null;
  isi: string; // Hanya untuk halaman detail
  gambar_utama_url: string | null;
  tanggal_publikasi: string; // Format ISO 8601, e.g., "2025-07-22T10:00:00Z"
  views_count: number;

  // Relasi Nested: Ini adalah data yang akan di-include oleh DRF Serializer
  kategori: Category;
  penulis: Author;
  tags: Tag[];
}
