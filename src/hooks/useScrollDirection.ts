// src/hooks/useScrollDirection.ts

"use client";

import { useEffect, useRef, useState } from "react";

export type ScrollDirection = "up" | "down" | null;

/**
 * Custom hook untuk mendeteksi arah scroll pengguna.
 * @param threshold - Jarak dari atas halaman (dalam piksel) di mana arah scroll dianggap null (di atas).
 * @returns 'up', 'down', atau null.
 */
export const useScrollDirection = (threshold = 10): ScrollDirection => {
  // Kita gunakan useRef untuk menyimpan nilai lastScrollY tanpa memicu re-render.
  // Ini lebih efisien daripada menggunakan useState untuk nilai ini.
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Jika masih di area threshold (paling atas), anggap null.
      if (currentScrollY <= threshold) {
        setScrollDirection(null);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Tentukan arah scroll
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Selalu update posisi scroll terakhir
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // Efek ini hanya perlu dijalankan sekali saat komponen mount,
    // karena kita menangani update `lastScrollY` melalui ref.
  }, [threshold]);

  return scrollDirection;
};
