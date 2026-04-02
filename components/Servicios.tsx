"use client";

import {
  Search,
  Settings2,
  TrendingUp,
  GraduationCap,
  UserRound,
  ArrowRight,
} from "lucide-react";

const servicios = [
  {
    icon: Search,
    title: "Diagnóstico Estratégico y de Gestión",
    desc: "Levantamos, analizamos y estructuramos información clave de tu emprendimiento o empresa. Identificamos problemas reales, oportunidades de mejora y entregamos propuestas priorizadas para reducir la incertidumbre.",
    tags: ["Análisis", "Diagnóstico", "Propuestas"],
    accent: true,
  },
  {
    icon: Settings2,
    title: "Asesoría en Orden y Gestión Básica",
    desc: "Para emprendimientos y PYMES que necesitan ordenar sus bases: finanzas, inventarios, ventas, herramientas digitales y procesos. Construimos una base mínima de control para operar con claridad y estabilidad.",
    tags: ["Finanzas", "Procesos", "Herramientas"],
    accent: false,
  },
  {
    icon: TrendingUp,
    title: "Estrategias Comerciales y de Marketing",
    desc: "Para empresas B2B y OTEC que buscan estructurar su captación de clientes, definir cuentas objetivo, ordenar el discurso comercial y ejecutar estrategias más focalizadas.",
    tags: ["B2B", "ABM", "Estrategia"],
    accent: false,
  },
  {
    icon: GraduationCap,
    title: "Diseño de Proyectos de Capacitación",
    desc: "Detectamos necesidades formativas, diseñamos la estructura del programa, coordinamos especialistas y articulamos con OTEC. Actuamos como diseñadores y gestores del proyecto formativo.",
    tags: ["OTEC", "Capacitación", "Diseño"],
    accent: true,
  },
  {
    icon: UserRound,
    title: "Asesorías Individuales Específicas",
    desc: "Sesiones puntuales para preparación profesional, orden de decisiones personales o laborales, análisis de escenarios. Objetivos claros, alcance definido, sin procesos indefinidos.",
    tags: ["CV", "Decisiones", "Análisis"],
    accent: false,
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-[#EAEEF5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-700 tracking-[3.5px] uppercase text-[#C9962A] mb-2 block">
            Servicios
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-700 text-[#1C3557] text-4xl mb-4 leading-tight">
            ¿En qué podemos ayudarte?
          </h2>
          <div className="w-10 h-[3px] bg-[#C9962A] rounded mb-6" />
          <p className="text-[#64748B] text-base leading-relaxed">
            Cada servicio está diseñado para ordenar, clarificar y apoyar la toma de decisiones.
            Pueden prestarse de forma independiente o como parte de un proceso continuo.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicios.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`bg-white rounded-xl p-8 shadow-sm border-t-[3px] flex flex-col transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 group ${
                  s.accent ? "border-[#C9962A]" : "border-[#1C3557]"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-6 ${
                    s.accent ? "bg-[#C9962A]/12" : "bg-[#EAEEF5]"
                  }`}
                >
                  <Icon size={22} className={s.accent ? "text-[#C9962A]" : "text-[#1C3557]"} />
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-base font-700 text-[#1C3557] mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed flex-1">{s.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-[family-name:var(--font-montserrat)] font-600 tracking-wide bg-[#EAEEF5] text-[#64748B] px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contacto"
                  className="mt-6 flex items-center gap-1.5 text-[#1C3557] font-[family-name:var(--font-montserrat)] font-600 text-xs group-hover:text-[#C9962A] transition-colors"
                >
                  Solicitar información
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-[#1C3557] rounded-xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-700 tracking-[3px] uppercase text-[#E8B84B] mb-4">
                ¿No sabes por dónde empezar?
              </p>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-700 text-white leading-snug mb-3">
                Conversemos sobre tu situación
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Una consulta inicial sin costo para entender tu contexto y ver cómo podemos ayudarte.
              </p>
            </div>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 bg-[#C9962A] hover:bg-[#b5841f] text-white font-[family-name:var(--font-montserrat)] font-600 text-sm px-5 py-3 rounded-md transition-colors group"
            >
              Agendar consulta gratuita
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
