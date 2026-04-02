"use client";

import { ClipboardList, ScanSearch, Scale, ListChecks, Rocket } from "lucide-react";

const pasos = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Diagnóstico",
    desc: "Levantamiento integral del contexto, personas, procesos, entorno y datos disponibles. Entender antes de actuar.",
  },
  {
    num: "02",
    icon: ScanSearch,
    title: "Análisis y Clarificación",
    desc: "Identificamos patrones, problemas y causas. El cliente entiende qué ocurre, por qué y qué implicancias tiene.",
  },
  {
    num: "03",
    icon: Scale,
    title: "Evaluación",
    desc: "Fortalezas, debilidades, oportunidades y riesgos. Una base objetiva para dimensionar el estado real del cliente.",
  },
  {
    num: "04",
    icon: ListChecks,
    title: "Priorización y Propuesta",
    desc: "Sugerencias de mejora priorizadas por impacto y viabilidad. El cliente elige conscientemente qué abordar.",
  },
  {
    num: "05",
    icon: Rocket,
    title: "Implementación y Seguimiento",
    desc: "Estructura del proyecto, acuerdos formalizados, ejecución y revisiones periódicas hasta el cierre documentado.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-700 tracking-[3.5px] uppercase text-[#C9962A] mb-2 block">
            Método
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-700 text-[#1C3557] text-4xl mb-4 leading-tight">
            Cómo trabajamos
          </h2>
          <div className="w-10 h-[3px] bg-[#C9962A] rounded mb-6" />
          <p className="text-[#64748B] text-base leading-relaxed">
            Un proceso estructurado en cinco etapas que transforma información dispersa en claridad
            accionable. La lógica es siempre la misma:{" "}
            <strong className="text-[#1C3557]">orden → claridad → decisión → acción.</strong>
          </p>
        </div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="hidden lg:flex items-stretch gap-0 mb-12">
          {pasos.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.num} className="flex items-stretch flex-1 relative">
                <div className="bg-white rounded-none first:rounded-l-xl last:rounded-r-xl p-7 shadow-sm flex-1 flex flex-col border border-[#D8E0EC]/60 hover:shadow-md transition-shadow group">
                  <p className="font-[family-name:var(--font-montserrat)] text-4xl font-800 text-[#EAEEF5] leading-none mb-4 group-hover:text-[#C9962A]/20 transition-colors">
                    {p.num}
                  </p>
                  <div className="w-9 h-9 bg-[#EAEEF5] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#1C3557]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-700 text-[#1C3557] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed flex-1">{p.desc}</p>
                </div>
                {/* Arrow connector */}
                {i < pasos.length - 1 && (
                  <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 z-10 bg-[#F5F7FA] px-0.5">
                    <span className="text-[#C9962A] font-700 text-lg">→</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Steps — mobile */}
        <div className="flex lg:hidden flex-col gap-4 mb-12">
          {pasos.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.num} className="bg-white rounded-xl p-6 shadow-sm border border-[#D8E0EC]/60 flex gap-5 items-start">
                <div className="shrink-0">
                  <p className="font-[family-name:var(--font-montserrat)] text-3xl font-800 text-[#EAEEF5] leading-none">
                    {p.num}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 bg-[#EAEEF5] rounded-md flex items-center justify-center">
                      <Icon size={14} className="text-[#1C3557]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-700 text-[#1C3557]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#64748B] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Principles */}
        <div className="bg-[#1C3557] rounded-2xl p-8 md:p-12">
          <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-700 tracking-[3px] uppercase text-[#E8B84B] mb-6">
            Principios del método
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { p: "Orden antes de acción", s: "No se ejecuta sin comprender." },
              { p: "Claridad antes de decisión", s: "No se decide sin análisis." },
              { p: "Priorización consciente", s: "Se elige lo que aporta mayor valor." },
              { p: "Evidencia sobre intuición", s: "Decisiones sustentadas en datos y criterio profesional." },
              { p: "Documentación y trazabilidad", s: "Todo proceso queda registrado y validado." },
              { p: "Decisión en manos del cliente", s: "Reducimos la incertidumbre. La elección es tuya." },
            ].map((item) => (
              <div key={item.p} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9962A] mt-2 shrink-0" />
                <div>
                  <p className="font-[family-name:var(--font-montserrat)] text-sm font-700 text-white">{item.p}</p>
                  <p className="text-xs text-white/50 mt-0.5">{item.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
