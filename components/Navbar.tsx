"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoSVG from "./LogoSVG";

const navLinks = [
  { label: "Quiénes somos", href: "#identidad" },
  { label: "Servicios", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1C3557] shadow-lg shadow-[#1C3557]/20"
          : "bg-[#1C3557]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <LogoSVG className="w-10 h-10" />
          <div className="font-[family-name:var(--font-montserrat)]">
            <span className="text-white font-bold text-lg tracking-tight">LC</span>
            <span className="text-[#C9962A] mx-2 font-light">|</span>
            <span className="text-white/85 font-medium text-sm tracking-wide">
              Orden y Claridad
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-montserrat)] text-white/75 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 bg-[#C9962A] hover:bg-[#b5841f] text-white font-[family-name:var(--font-montserrat)] font-700 text-sm px-5 py-2.5 rounded-md transition-colors duration-200"
        >
          Agenda una consulta
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#152c47] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white font-[family-name:var(--font-montserrat)] font-medium text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#C9962A] text-white text-center font-[family-name:var(--font-montserrat)] font-semibold text-sm px-5 py-3 rounded-md"
          >
            Agenda una consulta
          </a>
        </div>
      )}
    </header>
  );
}
