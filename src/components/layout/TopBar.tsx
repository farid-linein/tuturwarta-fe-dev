// src/components/layout/TopBar.tsx

"use client";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = () => {
  return (
    // Menggunakan kelas gradien yang Anda berikan
    <div className="bg-gradient-to-r from-indigo-500 to-gray-800 text-white">
      <div className="container flex h-[30px] items-center justify-end">
        <div className="flex items-center space-x-5">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:opacity-80 transition-opacity"
          >
            <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:opacity-80 transition-opacity"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Youtube"
            className="hover:opacity-80 transition-opacity"
          >
            <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
