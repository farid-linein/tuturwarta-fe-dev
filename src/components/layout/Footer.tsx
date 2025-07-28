import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Kolom Kiri: Logo & Kontak */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link href="/" className="relative w-64 h-20">
              {/* Ganti src dengan path logo footer Anda */}
              <Image
                src="/OfficialTuturWartaWhite.png"
                alt="Tutur Warta Logo"
                // layout="fill"
                fill
                priority
                objectFit="contain"
              />
            </Link>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faPhone} className="h-8 w-8 text-white" />
              <span className="text-3xl font-bold text-white">Contact Us</span>
            </div>
          </div>

          {/* Kolom Tengah & Kanan digabung untuk layout yang lebih baik */}
          <div className="md:col-span-2 flex flex-col items-center md:items-end space-y-8">
            {/* Link Navigasi Footer */}
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              <Link
                href="/tentang-kami"
                className="hover:text-white transition-colors"
              >
                Tentang Kami
              </Link>
              <Link
                href="/pedoman-media-siber"
                className="hover:text-white transition-colors"
              >
                Pedoman Media Siber
              </Link>
              <Link
                href="/kebijakan-privasi"
                className="hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/info-iklan"
                className="hover:text-white transition-colors"
              >
                Info Iklan
              </Link>
              <Link
                href="/disclaimer"
                className="hover:text-white transition-colors"
              >
                Disclaimer
              </Link>
              <Link
                href="/karir"
                className="hover:text-white transition-colors"
              >
                Karir
              </Link>
            </nav>

            {/* Ikon Sosial */}
            <div className="flex items-center space-x-6">
              <a
                href="#"
                aria-label="Youtube"
                className="text-white hover:text-red-600 transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube} className="h-7 w-7" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-pink-500 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-7 w-7" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-7 w-7" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TuturWarta. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
