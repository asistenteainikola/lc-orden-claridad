"use client";

import { HeartHandshake, LayoutList, Lightbulb, BarChart3 } from "lucide-react";

const pilares = [
  {
    icon: HeartHandshake,
    num: "01",
    title: "Empatía profesional",
    desc: "Escuchamos, entendemos el contexto y acompañamos sin juicio, con respeto por el ritmo y realidad del cliente.",
    accent: false,
  },
  {
    icon: LayoutList,
    num: "02",
    title: "Orden como método",
    desc: "Todo trabajo se estructura en etapas claras, con documentación y trazabilidad, evitando improvisación.",
    accent: true,
  },
  {
    icon: Lightbulb,
    num: "03",
    title: "Claridad como resultado",
    desc: "El cliente termina el proceso con definiciones concretas: qué pasa, por qué pasa, qué opciones existen y qué sigue.",
    accent: false,
  },
  {
    icon: BarChart3,
    num: "04",
    title: "Evidencia para decidir",
    desc: "Priorizamos decisiones informadas mediante datos, análisis, experiencia práctica y criterio profesional.",
    accent: true,
  },
];

export default function Identidad() {
  return (
    <section id="identidad" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-700 tracking-[3.5px] uppercase text-[#C9962A] mb-2 block">
            Quiénes somos
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-700 text-[#1C3557] text-4xl mb-4 leading-tight">
            Orden y Claridad como filosofía
          </h2>
          <div className="w-10 h-[3px] bg-[#C9962A] rounded mb-6" />
          <p className="text-[#64748B] text-base leading-relaxed">
            LC | Orden y Claridad es una consultoría orientada a apoyar a personas y organizaciones a
            enfrentar situaciones de desorden, estrés e incertidumbre, transformándolas en escenarios
            claros, estructurados y accionables para la toma de decisiones.
          </p>
          <p className="text-[#64748B] text-base leading-relaxed mt-4">
            No prometemos resultados específicos — lo que garantizamos es coherencia entre lo que decimos
            y hacemos, un proceso ordenado, y entregables claros que permitan avanzar con seguridad.
          </p>
        </div>

        {/* Pilares grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pilares.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className={`bg-white rounded-xl p-7 shadow-sm border-t-[3px] transition-shadow hover:shadow-md ${
                  p.accent ? "border-[#C9962A]" : "border-[#1C3557]"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${
                    p.accent ? "bg-[#C9962A]/12" : "bg-[#EAEEF5]"
                  }`}
                >
                  <Icon size={22} className={p.accent ? "text-[#C9962A]" : "text-[#1C3557]"} />
                </div>
                <p className="font-[family-name:var(--font-montserrat)] text-4xl font-800 text-[#EAEEF5] leading-none mb-3">
                  {p.num}
                </p>
                <h3 className="font-[family-name:var(--font-montserrat)] text-base font-700 text-[#1C3557] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Quote block */}
        <div
          className="mt-16 rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: "#1C3557" }}
        >
          <div className="flex-1">
            <p className="font-[family-name:var(--font-montserrat)] text-2xl font-700 text-white leading-relaxed">
              "Nuestro foco no es decirle al cliente qué hacer, sino entregarle{" "}
              <em className="not-italic text-[#E8B84B]">claridad</em> para que pueda decidir y actuar
              sin cargar con el peso del desorden."
            </p>
            <p className="text-white/40 text-sm mt-4 italic">— Franco Laurie, Consultor LC</p>
          </div>
          <div className="shrink-0">
            <span className="bg-[#C9962A] text-white font-[family-name:var(--font-montserrat)] font-700 text-xs tracking-widest uppercase px-5 py-3 rounded-md block text-center">
              Orden y Claridad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
