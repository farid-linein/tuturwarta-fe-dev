"use client";

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Bisa log ke Sentry atau alat pelacak error lainnya
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h2 className="text-2xl font-bold text-red-500">Terjadi Kesalahan</h2>
      <p className="mt-2 text-gray-700">Silakan coba lagi atau kembali ke halaman sebelumnya.</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
