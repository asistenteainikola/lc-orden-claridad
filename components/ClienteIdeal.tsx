"use client";

import { Sprout, Building2, Building, CheckCircle2, XCircle } from "lucide-react";

const tipos = [
  {
    icon: Sprout,
    title: "Emprendimientos",
    subtitle: "Etapa inicial o temprana",
    desc: "Que están partiendo o llevan pocos años de operación, presentan desorden en finanzas, ventas o procesos, y desean construir bases sólidas desde el inicio.",
    value: "Ordenar desde el origen, reduciendo errores y desgaste innecesario.",
    accent: false,
  },
  {
    icon: Building2,
    title: "PYMES",
    subtitle: "Pequeñas y medianas empresas",
    desc: "Que ya operan y generan ingresos, presentan crecimiento desordenado, dependen del dueño en decisiones reactivas y carecen de indicadores claros.",
    value: "Ordenar lo existente, clarificar la situación actual y definir mejoras realistas.",
    accent: true,
  },
  {
    icon: Building,
    title: "Empresas medianas o grandes",
    subtitle: "Servicios específicos",
    desc: "Que requieren diagnósticos acotados, capacitaciones técnicas, diseño de soluciones formativas o estructuración de proyectos específicos.",
    value: "LC actúa como diseñador, articulador y gestor de soluciones.",
    accent: false,
  },
];

const fit = {
  yes: [
    "Enfrenta incertidumbre real en su gestión",
    "Tiene sobrecarga mental o desorden operativo",
    "Dispuesto a analizar su realidad con datos",
    "Valora el orden, la claridad y la planificación",
    "Entiende que las decisiones requieren proceso",
  ],
  no: [
    "Busca soluciones rápidas sin análisis",
    "No está dispuesto a revisar datos o procesos",
    "Espera resultados garantizados sin cambios",
    "Busca solo validación emocional, no ordenar",
  ],
};

export default function ClienteIdeal() {
  return (
    <section id="clientes" className="py-24 bg-[#EAEEF5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-700 tracking-[3.5px] uppercase text-[#C9962A] mb-2 block">
            Cliente ideal
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-700 text-[#1C3557] text-4xl mb-4 leading-tight">
            ¿Es LC para ti?
          </h2>
          <div className="w-10 h-[3px] bg-[#C9962A] rounded mb-6" />
          <p className="text-[#64748B] text-base leading-relaxed">
            Trabajamos con quienes comprenden que tomar mejores decisiones requiere información clara,
            análisis y método — y están dispuestos a invertir en ordenar su realidad.
          </p>
        </div>

        {/* Tipos de cliente */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {tipos.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className={`bg-white rounded-xl p-7 shadow-sm border-t-[3px] flex flex-col ${
                  t.accent ? "border-[#C9962A]" : "border-[#1C3557]"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${
                    t.accent ? "bg-[#C9962A]/12" : "bg-[#EAEEF5]"
                  }`}
                >
                  <Icon size={22} className={t.accent ? "text-[#C9962A]" : "text-[#1C3557]"} />
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-base font-700 text-[#1C3557] mb-1">
                  {t.title}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-xs font-600 text-[#64748B] uppercase tracking-wide mb-3">
                  {t.subtitle}
                </p>
                <p className="text-sm text-[#64748B] leading-relaxed flex-1">{t.desc}</p>
                <div className="mt-5 pt-5 border-t border-[#D8E0EC]">
                  <p className="text-xs font-[family-name:var(--font-montserrat)] font-600 text-[#C9962A] mb-1">
                    Valor principal
                  </p>
                  <p className="text-xs text-[#64748B] leading-relaxed">{t.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fit / No fit */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-green-500">
            <p className="font-[family-name:var(--font-montserrat)] text-sm font-700 text-green-700 mb-5">
              ✓ Cliente con el que trabajamos bien
            </p>
            <ul className="flex flex-col gap-3">
              {fit.yes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-[#1E293B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-400">
            <p className="font-[family-name:var(--font-montserrat)] text-sm font-700 text-red-600 mb-5">
              ✕ No es nuestro cliente ideal
            </p>
            <ul className="flex flex-col gap-3">
              {fit.no.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-[#1E293B]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-[#64748B] italic border-t border-[#D8E0EC] pt-4">
              "El orden también implica saber hasta dónde llegar."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
