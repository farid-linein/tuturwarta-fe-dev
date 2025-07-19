"use client"; // Ini menandakan komponen ini adalah Client Component karena menggunakan state dan event listener

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Pastikan mengimpor ikon yang benar
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'; // faBars untuk hamburger, faUser untuk ikon user
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => {
  const [isTopRowVisible, setIsTopRowVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek untuk menyembunyikan/menampilkan top_row saat scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Sembunyikan jika scroll ke bawah dan sudah melewati ambang batas (misal 50px)
      // Tampilkan jika scroll ke atas atau di bagian paling atas
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsTopRowVisible(false);
      } else {
        setIsTopRowVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const categories = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Ekonomi", href: "/news/ekonomi" },
    { name: "Techno", href: "/news/tekno" },
    { name: "Otomotif", href: "/news/otomotif" },
    { name: "Lifestyle & Travel", href: "/news/lifestyle-travel" },
    { name: "Celebrity", href: "/news/celebrity" },
    { name: "Sport", href: "/news/sport" },
    { name: "Health", href: "/news/health" },
    { name: "Edukasi", href: "/news/edukasi" },
    { name: "Muslim", href: "/news/muslim" },
  ];

  return (
    <header className="w-full flex justify-center z-50">
      <div className="w-full max-w-[1248px] lg:px-0 md:px-4 px-2"> {/* Kontainer utama agar sesuai mockup 1248px dan responsif */}
        {/* Top Row - Sembunyi saat scroll */}
        <div
          className={`
            ${isTopRowVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
            transition-all duration-300 ease-in-out
            w-full bg-gradient-to-r from-indigo-500 to-gray-800
            py-1 pr-5 flex justify-end items-center h-[30px]
            overflow-hidden
          `}
          role="complementary" // Peran untuk konten pelengkap
          aria-label="Informasi tambahan dan tautan sosial media"
        >
          <div className="flex space-x-4 items-center h-full">
            {/* Social Icons */}
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook (Buka di tab baru)">
              <FontAwesomeIcon icon={faFacebookF} className="text-white text-lg hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram (Buka di tab baru)">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-lg hover:text-pink-400 transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter (Buka di tab baru)">
              <FontAwesomeIcon icon={faTwitter} className="text-white text-lg hover:text-blue-300 transition-colors" />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube (Buka di tab baru)">
              <FontAwesomeIcon icon={faYoutube} className="text-white text-lg hover:text-red-500 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Bottom Row (garis pemisah) */}
        <div className="w-full h-[5px] bg-gradient-to-tl from-red-300 to-yellow-600" aria-hidden="true" /> {/* aria-hidden untuk elemen dekoratif */}

        {/* Main Navbar - Sticky */}
        <nav className="sticky top-0 bg-gray-200 w-full h-[65px] flex items-center justify-between px-4 lg:px-0 shadow-md" aria-label="Navigasi Utama">
          {/* Logo */}
          <Link href="/" className="relative h-10 w-36 flex-shrink-0" aria-label="Beranda Tutur Warta">
            <Image
              src="/images/logo-tutur-warta.png" // Ganti dengan path logo Anda di public/images
              alt="Logo Tutur Warta"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain"
              priority // Tambahkan priority untuk logo agar cepat dimuat
            />
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Buka menu navigasi"
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
          </div>

          {/* Main Navigation (Desktop) */}
          <div className="hidden lg:flex flex-grow justify-center" role="navigation">
            <ul className="inline-flex space-x-9 items-center justify-center">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors whitespace-nowrap px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label={`Lihat kategori ${cat.name}`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* User Icon (Desktop) */}
          <Link href="/profile" className="hidden lg:block relative w-9 h-9 rounded-lg overflow-hidden flex-shrink-0" aria-label="Profil Pengguna">
            <FontAwesomeIcon icon={faUser} className="absolute inset-0 w-full h-full text-gray-700 p-1" aria-hidden="true" />
            {/* Jika ada gambar profil pengguna, gunakan Image component di sini: */}
            {/* <Image
              src="/images/user-placeholder.jpg" // Ganti dengan path gambar user Anda
              alt="Profil Pengguna"
              fill
              sizes="36px"
              className="object-cover"
            /> */}
          </Link>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu" // ID untuk aria-controls
            className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 animate-fade-in"
            role="dialog" // Menandakan ini adalah dialog
            aria-modal="true" // Menandakan ini adalah modal
            aria-label="Menu navigasi mobile"
          >
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label="Tutup menu navigasi"
            >
              &times; {/* Ikon 'X' untuk menutup */}
            </button>
            <ul className="flex flex-col space-y-4 text-center">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="text-2xl font-bold text-white hover:text-blue-400 transition-colors py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={toggleMobileMenu}
                    aria-label={`Lihat kategori ${cat.name}`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/profile"
                  className="text-2xl font-bold text-white hover:text-blue-400 transition-colors py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={toggleMobileMenu}
                  aria-label="Lihat Profil Pengguna"
                >
                    Profil
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;