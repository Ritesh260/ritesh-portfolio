"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-[#1A1A1A]">
      <Container>
        <nav className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-3xl font-bold tracking-wider text-white"
          >
            R<span className="text-[#D4AF37]">.</span>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="
                text-white
                text-sm
                uppercase
                tracking-[3px]
                hover:text-[#D4AF37]
                transition
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}

          <Link
            href="/contact"
            className="
            hidden md:flex
            px-5
            py-3
            rounded-full
            border
            border-[#D4AF37]
            text-[#D4AF37]
            hover:bg-[#D4AF37]
            hover:text-black
            transition
            "
          >
            Hire Me
          </Link>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
            md:hidden
            text-white
            "
          >
            {isOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </nav>
      </Container>

      {/* Mobile Menu */}

      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            isOpen
              ? "max-h-[500px] border-t border-[#1A1A1A]"
              : "max-h-0"
          }
        `}
      >
        <Container>
          <div className="py-6 flex flex-col gap-6">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="
                text-white
                uppercase
                tracking-[2px]
                hover:text-[#D4AF37]
                transition
                "
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="
              mt-2
              text-center
              py-3
              rounded-full
              bg-[#D4AF37]
              text-black
              font-semibold
              "
            >
              Hire Me
            </Link>

          </div>
        </Container>
      </div>
    </header>
  );
}