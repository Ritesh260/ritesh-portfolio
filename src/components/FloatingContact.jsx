
"use client";

import { Phone, MessageCircle } from "lucide-react";

const phoneNumber = "9839621748";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">

      {/* WhatsApp Button */}
      
{/* WhatsApp Button */}
<a
  href={`https://wa.me/91${phoneNumber}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="
    w-14 h-14 rounded-full
    bg-[#25D366]
    text-white
    flex items-center justify-center
    shadow-lg shadow-green-500/30
    hover:scale-110 hover:shadow-green-500/50
    transition-all duration-300
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-9 h-9"
  >
    <path d="M16.04 3C8.86 3 3.02 8.84 3.02 16.02c0 2.29.6 4.53 1.75 6.51L3 29l6.63-1.74a12.98 12.98 0 0 0 6.41 1.68h.01C23.23 28.94 29.07 23.1 29.07 15.92A13 13 0 0 0 16.04 3zm0 23.75h-.01a10.8 10.8 0 0 1-5.5-1.51l-.39-.23-3.94 1.03 1.05-3.84-.25-.4a10.75 10.75 0 0 1-1.65-5.78c0-5.92 4.82-10.74 10.75-10.74a10.68 10.68 0 0 1 7.6 3.15 10.68 10.68 0 0 1 3.14 7.61c0 5.92-4.82 10.74-10.75 10.74zm5.9-8.05c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.61-1.91-1.8-2.23-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.31c.16.21 2.27 3.47 5.5 4.87.77.33 1.37.53 1.84.68.77.25 1.47.22 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" />
  </svg>
</a>


      {/* Call Button */}
      <a
        href={`tel:+91${phoneNumber}`}
        aria-label="Call Ritesh Mali"
        className="
          w-14 h-14 rounded-full
          bg-[#D4AF37]
          text-black
          flex items-center justify-center
          shadow-lg shadow-yellow-500/20
          hover:scale-110
          transition-all duration-300
        "
      >
        <Phone size={25} />
      </a>

    </div>
  );
}
