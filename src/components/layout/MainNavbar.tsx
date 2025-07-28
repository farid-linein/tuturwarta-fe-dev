// src/components/layout/MainNavbar.tsx

"use client";

import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Ekonomi", href: "/ekonomi" },
  { name: "Techno", href: "/techno" },
  { name: "Otomotif", href: "/otomotif" },
  { name: "Lifestyle & Travel", href: "/lifestyle-travel" },
  { name: "Celebrity", href: "/celebrity" },
  { name: "Sport", href: "/sport" },
  { name: "Healt", href: "/healt" },
  { name: "Edukasi", href: "/edukasi" },
  { name: "Muslim", href: "/muslim" },
];

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Wrapper untuk navbar utama, menggunakan bg-gray-200 dari referensi
    <div className="bg-gray-200">
      <nav className="container flex h-[65px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-[167px] h-[50px] flex-shrink-0">
          <Image
            src="/OfficialTuturWarta.png" // Pastikan logo ada di /public
            alt="Tutur Warta Logo"
            fill
            style={{ objectFit: "contain" }}
            priority // Prioritaskan loading logo
          />
        </Link>

        {/* Menu untuk Desktop (disembunyikan di mobile) */}
        <div className="hidden lg:flex items-center space-x-7 text-sm font-bold text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Ikon User */}
          <button className="p-2 rounded-full hover:bg-gray-300 transition-colors">
            <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-gray-700" />
          </button>

          {/* Tombol Hamburger (hanya muncul di mobile) */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="h-6 w-6 text-gray-700"
            />
          </button>
        </div>
      </nav>

      {/* Menu Mobile Expanded (kondisional) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-200 absolute top-full left-0 w-full shadow-lg">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-800 font-semibold rounded-md hover:bg-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNavbar;
