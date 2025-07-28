// src/components/layout/Header.tsx

"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import MainNavbar from "./MainNavbar";
import TopBar from "./TopBar";

const Header = () => {
  const scrollDirection = useScrollDirection();

  // Header terlihat jika scroll ke atas ('up') atau jika berada di paling atas (null).
  const isVisible = scrollDirection === "up" || scrollDirection === null;

  return (
    // Wrapper untuk seluruh header. Kita tambahkan tinggi total agar tidak ada lompatan layout.
    // h-[100.06px] = 30px (TopBar) + 5.06px (Garis) + 65px (MainNavbar)
    <div className="relative h-[100.06px]">
      {/* Wrapper fixed untuk semua elemen yang akan bergerak */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-[35.06px]" // Sembunyikan TopBar & Garis
        }`}
      >
        {/* Bagian yang Hide/Show */}
        <div>
          <TopBar />
          {/* Garis gradien dengan tinggi arbitrer dari Tailwind */}
          <div className="h-[5.06px] bg-gradient-to-l from-red-300 to-yellow-600" />
        </div>

        {/* MainNavbar yang selalu terlihat dan sticky */}
        <MainNavbar />
      </div>
    </div>
  );
};

export default Header;
