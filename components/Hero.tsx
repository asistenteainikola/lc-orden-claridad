"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeroIllustration from "./HeroIllustration";

const bullets = [
  "Diagnóstico estructurado y basado en evidencia",
  "Procesos claros con entregables concretos",
  "Acompañamiento desde el análisis hasta la acción",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1C3557 0%, #1a3a65 60%, #243e70 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute right-[-80px] top-[-80px] w-[400px] h-[400px] rounded-full border-[60px] border-[#C9962A]/15 pointer-events-none" />
      <div className="absolute right-[80px] bottom-[-100px] w-[240px] h-[240px] rounded-full border-[40px] border-[#C9962A]/10 pointer-events-none" />
      <div className="absolute left-[-60px] bottom-[20%] w-[200px] h-[200px] rounded-full border-[30px] border-white/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[#C9962A]/20 text-[#E8B84B] font-[family-name:var(--font-montserrat)] text-xs font-700 tracking-[3px] uppercase px-4 py-2 rounded-full mb-8">
              Consultoría Estratégica · Chile
            </span>

            <h1 className="font-[family-name:var(--font-montserrat)] font-800 text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              Convertimos{" "}
              <span className="text-[#E8B84B]">complejidad</span>
              <br />
              en claridad
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Apoyamos a emprendimientos y PYMES a ordenar su gestión, reducir
              la incertidumbre y tomar mejores decisiones con criterio y respaldo.
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-3 mb-10">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C9962A] mt-0.5 shrink-0" />
                  <span className="text-white/75 text-sm">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-[#C9962A] hover:bg-[#b5841f] text-white font-[family-name:var(--font-montserrat)] font-semibold text-sm px-7 py-4 rounded-md transition-colors duration-200 group"
              >
                Agenda una consulta gratuita
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-[family-name:var(--font-montserrat)] font-semibold text-sm px-7 py-4 rounded-md transition-colors duration-200"
              >
                Ver servicios
              </a>
            </div>

            {/* Tagline */}
            <p className="mt-12 text-white/40 font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase italic">
              "El orden ayuda a tomar mejores decisiones."
            </p>
          </div>

          {/* Right — illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <HeroIllustration />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,80 1440,20 L1440,60 L0,60 Z" fill="#F5F7FA" />
        </svg>
      </div>
    </section>
  );
}
