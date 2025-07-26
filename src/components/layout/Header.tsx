// src/components/layout/Header.tsx
"use client"; // Tambahkan ini karena menggunakan hook

import { CATEGORIES, SOCIAL_LINKS } from "@/data/navigation"; // Asumsi konstanta dipindah
import { useScrollDirection } from "@/hooks/useScrollDirection"; // Impor hook
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Tambahkan faTimes untuk close icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection(10); // Gunakan hook dengan threshold 10px

  // Logika untuk menentukan apakah top dan bottom row harus disembunyikan
  // Misalnya, sembunyikan jika scroll ke bawah lebih dari threshold
  const shouldHideTopRows = scrollDirection === "down";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Header container penuh lebar
    <header className="w-full bg-white border-b">
      {/* Top Row */}
      <div
        className={`w-full bg-gradient-to-r from-indigo-500 to-gray-800 h-[30px] flex items-center justify-end pr-5 transition-all duration-300 ease-in-out ${
          shouldHideTopRows
            ? "-translate-y-full opacity-0 absolute"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="flex space-x-4 items-center h-full">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              aria-label={social.platform}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />{" "}
              {/* Sesuaikan ukuran */}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      {/* Gunakan animasi Tailwind atau utility class untuk hide/show */}
      <div
        className={`w-full h-[5.06px] bg-gradient-to-l from-red-300 to-yellow-600 transition-all duration-300 ease-in-out ${
          shouldHideTopRows
            ? "-translate-y-full opacity-0 absolute"
            : "translate-y-0 opacity-100"
        }`}
      />

      {/* Main Navbar - Selalu sticky */}
      <div className="sticky top-0 z-50 w-full bg-gray-200 shadow-sm">
        {/* Kontainer dengan lebar maks 1248px dan dipusatkan */}
        <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8 h-[65px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center w-44 h-5/6">
            <Image
              src="/images/logo.svg" // Ganti dengan path logo yang benar di folder /public
              alt="Logo Tutur Warta"
              width={166}
              height={50}
              className="object-contain"
              priority // Tambahkan jika logo adalah LCP (Largest Contentful Paint)
            />
          </div>

          {/* Kategori List - Desktop */}
          <nav className="hidden md:flex space-x-6 items-center justify-start flex-1 px-4 overflow-x-auto">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={
                  category.slug === "/" ? "/" : `/category/${category.slug}`
                } // Sesuaikan dengan routing Anda
                className="text-sm font-bold whitespace-nowrap hover:text-blue-600 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Kategori List - Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* User Icon */}
          <div className="hidden md:block">
            <Image
              src="/images/user-avatar.png" // Ganti dengan path avatar placeholder yang benar
              width={35}
              height={35}
              className="rounded-lg object-cover border border-gray-300"
              alt="Profil Pengguna"
            />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.slug}
                  href={
                    category.slug === "/" ? "/" : `/category/${category.slug}`
                  }
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)} // Tutup menu setelah klik
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
