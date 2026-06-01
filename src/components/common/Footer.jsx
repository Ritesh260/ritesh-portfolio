import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] bg-black">
      <Container>
        <div className="py-16">

          {/* Top */}

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <div>
              <h2 className="text-3xl font-bold text-white">
                Ritesh
                <span className="text-[#D4AF37]">.</span>
              </h2>

              <p className="text-zinc-500 mt-3 max-w-md">
                Junior React Developer focused on building
                modern, scalable and high-performance web
                applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 text-sm uppercase tracking-[2px]">
              <Link
                href="/"
                className="text-zinc-400 hover:text-[#D4AF37] transition"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-zinc-400 hover:text-[#D4AF37] transition"
              >
                About
              </Link>

              <Link
                href="/projects"
                className="text-zinc-400 hover:text-[#D4AF37] transition"
              >
                Projects
              </Link>

              <Link
                href="/experience"
                className="text-zinc-400 hover:text-[#D4AF37] transition"
              >
                Experience
              </Link>

              <Link
                href="/contact"
                className="text-zinc-400 hover:text-[#D4AF37] transition"
              >
                Contact
              </Link>
            </div>

          </div>

          {/* Divider */}

          <div className="h-px bg-[#1A1A1A] my-10" />

          {/* Bottom */}

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-zinc-500 text-sm">
              © 2026 Ritesh Mali. All Rights Reserved.
            </p>

            <div className="flex gap-6">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-[#D4AF37] transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-[#D4AF37] transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:yourmail@example.com"
                className="text-zinc-500 hover:text-[#D4AF37] transition"
              >
                Email
              </a>

            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}