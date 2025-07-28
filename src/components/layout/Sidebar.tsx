// src/components/layout/Sidebar.tsx

// Ini akan menjadi komponen yang lebih kompleks nanti,
// dengan data populer dan iklan.
const Sidebar = () => {
  return (
    <aside className="space-y-8">
      {/* Placeholder untuk Iklan */}
      <div className="bg-gray-200 h-64 w-full flex items-center justify-center rounded-md">
        <p className="text-gray-500">Ad Banner</p>
      </div>

      {/* Placeholder untuk Berita Populer */}
      <div>
        <h3 className="text-xl font-bold mb-4 border-b-2 border-red-500 pb-2">
          Populer
        </h3>
        <div className="space-y-4">
          {/* Item Berita Populer (Placeholder) */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
            <p className="text-sm font-semibold text-gray-800 flex-1">
              Judul berita populer yang menarik akan tampil di sini.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
            <p className="text-sm font-semibold text-gray-800 flex-1">
              Ini adalah contoh lain dari berita yang sedang tren.
            </p>
          </div>
          {/* Ulangi beberapa kali */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
