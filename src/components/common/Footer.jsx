
"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaWhatsapp,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaLayerGroup,
} from "react-icons/fa";

import Container from "./Container";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "React.js Development", icon: FaCode },
  { name: "Next.js Development", icon: FaLayerGroup },
  { name: "Responsive Websites", icon: FaMobileAlt },
  { name: "Dashboard Development", icon: FaLaptopCode },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#050505] text-white">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <Container>
        <div className="relative py-16 md:py-20">

          {/* Top CTA */}
          <div className="mb-16 rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-7 md:p-10">
            <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[4px] text-[#D4AF37]">
                  Have a project in mind?
                </p>

                <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-5xl">
                  Let's Build Something
                  <span className="text-[#D4AF37]"> Amazing.</span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400 md:text-base">
                  Have an idea or need a developer for your next project?
                  Let's connect and turn your vision into reality.
                </p>
              </div>

              <a
                href="mailto:riteshsaini734@gmail.com"
                className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                Let's Talk
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Main Footer */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <h2 className="text-4xl font-extrabold tracking-tight">
                  Ritesh<span className="text-[#D4AF37]">.</span>
                </h2>
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-400">
                Frontend Developer specializing in React.js and Next.js.
                I build modern, responsive and user-friendly web experiences.
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-medium text-zinc-400">
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-[#D4AF37]">
                Quick Links
              </h3>

              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-all duration-300 hover:pl-2 hover:text-[#D4AF37]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-[#D4AF37]">
                What I Do
              </h3>

              <ul className="space-y-4">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <li
                      key={service.name}
                      className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      <Icon className="shrink-0 text-[#D4AF37]" />
                      {service.name}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[2px] text-[#D4AF37]">
                Connect With Me
              </h3>

              <p className="mb-6 text-sm leading-7 text-zinc-400">
                Follow my work, explore my projects or get in touch.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Ritesh260"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-zinc-300 transition-all hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/ritesh-mali-44627032a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-zinc-300 transition-all hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:riteshsaini734@gmail.com"
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-zinc-300 transition-all hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="https://wa.me/919839621748"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-zinc-300 transition-all hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <FaWhatsapp />
                </a>
              </div>

              <a
                href="mailto:riteshsaini734@gmail.com"
                className="mt-6 inline-block break-all text-sm text-zinc-400 transition-colors hover:text-[#D4AF37]"
              >
                riteshsaini734@gmail.com
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

          {/* Bottom Footer */}
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">Ritesh Mali.</span>
              {" "}All Rights Reserved.
            </p>

            <p className="text-xs text-zinc-500">
              Designed & Developed with
              <span className="mx-1 text-[#D4AF37]">♥</span>
              by Ritesh Mali
            </p>

            {/* <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-black"
            >
              <FaArrowUp />
            </button> */}
          </div>

        </div>
      </Container>
    </footer>
  );
}
