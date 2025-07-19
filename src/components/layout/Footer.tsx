import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Pastikan Anda mengimpor ikon yang sesuai
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const infoLinks = [
    { name: "Tentang Kami", href: "/about" },
    { name: "Pedoman Media Siber", href: "/guidelines" },
    { name: "Kebijakan Privasi", href: "/privacy-policy" },
    { name: "Info Iklan", href: "/ads-info" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Karir", href: "/careers" },
  ];

  const socialLinks = [
    { name: "Youtube", href: "https://youtube.com", icon: faYoutube },
    { name: "Instagram", href: "https://instagram.com", icon: faInstagram },
    { name: "Twitter X", href: "https://twitter.com", icon: faXTwitter },
    { name: "Facebook", href: "https://facebook.com", icon: faFacebookF },
  ];

  return (
    <footer className="w-full flex justify-center bg-black text-gray-50 py-8 px-4 lg:px-0" role="contentinfo" aria-label="Informasi Footer Situs">
      <div className="w-full max-w-[1248px] flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left relative">
        {/* Logo */}
        <div className="mb-8 md:mb-0 relative w-80 h-24 flex-shrink-0">
          <Link href="/" aria-label="Beranda Tutur Warta">
            <Image
              src="/images/logo-tutur-warta-light.png" // Ganti dengan path logo footer Anda di public/images
              alt="Logo Tutur Warta Footer"
              fill
              sizes="(max-width: 768px) 80vw, 33vw"
              className="object-contain"
            />
          </Link>
        </div>

        {/* Info Links */}
        <nav className="mb-8 md:mb-0 flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 max-w-lg" aria-label="Tautan Informasi">
          {infoLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg italic text-gray-50 hover:text-blue-400 transition-colors mb-2 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Us */}
        <div className="mb-8 md:mb-0 flex items-center justify-center md:justify-start space-x-3" role="group" aria-label="Kontak Kami">
          <FontAwesomeIcon icon={faPhone} className="text-gray-50 text-2xl" aria-hidden="true" />
          <p className="text-4xl font-bold text-gray-50">Contact Us</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 items-center justify-center md:justify-start" role="group" aria-label="Tautan Media Sosial">
          {socialLinks.map((social) => (
            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} (Buka di tab baru)`}>
              <FontAwesomeIcon icon={social.icon} className="text-gray-50 text-3xl hover:text-blue-400 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;