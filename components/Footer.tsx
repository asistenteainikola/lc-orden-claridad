import LogoSVG from "./LogoSVG";
import { Mail, Phone } from "lucide-react";

const links = [
  { label: "Quiénes somos", href: "#identidad" },
  { label: "Servicios", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <LogoSVG className="w-10 h-10" />
              <div className="font-[family-name:var(--font-montserrat)]">
                <span className="text-white font-bold text-base">LC</span>
                <span className="text-[#C9962A] mx-2 font-light">|</span>
                <span className="text-white/75 font-medium text-sm">Orden y Claridad</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Consultoría estratégica orientada a transformar complejidad en claridad para la toma de
              mejores decisiones.
            </p>
            <p className="mt-5 text-[#C9962A] font-[family-name:var(--font-montserrat)] text-xs italic">
              "El orden ayuda a tomar mejores decisiones."
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-700 tracking-[3px] uppercase text-[#E8B84B] mb-5">
              Navegación
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-700 tracking-[3px] uppercase text-[#E8B84B] mb-5">
              Contacto directo
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-[#C9962A] shrink-0" />
                <a href="mailto:franco.laurie@gmail.com" className="text-white/60 hover:text-white text-sm transition-colors">
                  franco.laurie@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#C9962A] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+56996136964" className="text-white/60 hover:text-white text-sm transition-colors block">
                    +56 9 9613 6964
                  </a>
                  <a href="tel:+56932321978" className="text-white/60 hover:text-white text-sm transition-colors block mt-1">
                    +56 9 3232 1978
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-[#C9962A] hover:bg-[#b5841f] text-white font-[family-name:var(--font-montserrat)] font-600 text-xs px-5 py-2.5 rounded-md transition-colors"
              >
                Agenda una consulta
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} LC | Orden y Claridad — Franco Laurie Valenzuela. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">Chile</p>
        </div>
      </div>
    </footer>
  );
}
