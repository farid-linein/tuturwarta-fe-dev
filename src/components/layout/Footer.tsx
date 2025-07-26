// src/components/layout/Footer.tsx
import { SOCIAL_LINKS } from "@/data/navigation";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-50">
      {/* Main Content */}
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-between md:flex-row">
        {/* Logo */}
        <div className="flex items-center justify-start mb-4 md:mb-0">
          <Image
            src="/images/logo-footer.svg" // Ganti dengan path logo yang benar di folder /public
            alt="Logo Tutur Warta"
            width={166} // Sesuaikan dengan ukuran logo Anda
            height={50}
            className="object-contain"
          />
        </div>

        {/* Links */}
        <nav aria-label="Navigasi Footer">
          <ul className="flex flex-col text-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <li>
              <Link href="/tentang-kami" className="text-lg italic hover:underline">Tentang Kami</Link>
            </li>
            <li>
              <Link href="/pedoman-media-siber" className="text-lg italic hover:underline">Pedoman Media Siber</Link>
            </li>
            <li>
              <Link href="/kebijakan-privasi" className="text-lg italic hover:underline">Kebijakan Privasi</Link>
            </li>
            <li>
              <Link href="/info-iklan" className="text-lg italic hover:underline">Info Iklan</Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-lg italic hover:underline">Disclaimer</Link>
            </li>
            <li>
              <Link href="/karir" className="text-lg italic hover:underline">Karir</Link>
            </li>
          </ul>
        </nav>

        {/* Contact Us */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <FontAwesomeIcon icon={faPhone} className="text-xl text-gray-50" />
          <p className="text-4xl font-bold">Contact Us</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              aria-label={social.platform}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-50 hover:text-gray-300 transition-colors"
            >
              <FontAwesomeIcon icon={social.icon} className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
