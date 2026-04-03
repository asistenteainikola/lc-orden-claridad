"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";

export default function Contacto() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setError(
        "Falta la clave del formulario. Crea una cuenta gratuita en web3forms.com, registra el correo donde quieres recibir los mensajes y define NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY en el entorno."
      );
      return;
    }

    const lines = [
      `Nombre: ${form.nombre.trim()}`,
      form.empresa.trim() ? `Empresa / emprendimiento: ${form.empresa.trim()}` : null,
      `Correo: ${form.email.trim()}`,
      `Teléfono / WhatsApp: ${form.telefono.trim()}`,
      form.servicio.trim() ? `Servicio de interés: ${form.servicio.trim()}` : null,
      "",
      "Mensaje:",
      form.mensaje.trim(),
    ].filter((line) => line !== null);

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Contacto web — ${form.nombre.trim()}`,
          name: form.nombre.trim(),
          email: form.email.trim(),
          message: lines.join("\n"),
          telefono: form.telefono.trim(),
          ...(form.empresa.trim() && { empresa: form.empresa.trim() }),
          ...(form.servicio.trim() && { servicio: form.servicio.trim() }),
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) {
        setError(data.message || "No se pudo enviar. Intenta de nuevo más tarde.");
        return;
      }
      setSent(true);
    } catch {
      setError("Error de conexión. Revisa tu red e intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-700 tracking-[3.5px] uppercase text-[#C9962A] mb-2 block">
            Contacto
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-700 text-[#1C3557] text-4xl mb-4 leading-tight">
            Hablemos de tu situación
          </h2>
          <div className="w-10 h-[3px] bg-[#C9962A] rounded mb-6" />
          <p className="text-[#64748B] text-base leading-relaxed">
            Cuéntanos qué está pasando en tu empresa o emprendimiento. Una primera conversación sin
            costo para entender si podemos ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-[#1C3557] rounded-2xl p-8">
              <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-700 tracking-[3px] uppercase text-[#E8B84B] mb-6">
                Datos de contacto
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2E5F8A] flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#E8B84B]" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-montserrat)] text-xs font-600 text-white/50 uppercase tracking-wide mb-1">
                      Correo electrónico
                    </p>
                    <a
                      href="mailto:franco.laurie@gmail.com"
                      className="text-white text-sm hover:text-[#E8B84B] transition-colors"
                    >
                      franco.laurie@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2E5F8A] flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#E8B84B]" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-montserrat)] text-xs font-600 text-white/50 uppercase tracking-wide mb-1">
                      Teléfono
                    </p>
                    <a
                      href="tel:+56996136964"
                      className="text-white text-sm hover:text-[#E8B84B] transition-colors block"
                    >
                      +56 9 9613 6964
                    </a>
                    <a
                      href="tel:+56932321978"
                      className="text-white text-sm hover:text-[#E8B84B] transition-colors block mt-1"
                    >
                      +56 9 3232 1978
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/40 text-xs italic font-[family-name:var(--font-montserrat)]">
                  "El orden ayuda a tomar mejores decisiones."
                </p>
                <p className="text-white/30 text-xs mt-2">— Franco Laurie Valenzuela</p>
              </div>
            </div>

            {/* What to expect */}
            <div className="bg-white rounded-xl p-7 shadow-sm border border-[#D8E0EC]/60">
              <p className="font-[family-name:var(--font-montserrat)] text-sm font-700 text-[#1C3557] mb-4">
                ¿Qué puedes esperar?
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Respuesta en menos de 24 horas hábiles",
                  "Primera consulta sin costo ni compromiso",
                  "Proceso claro desde el primer contacto",
                  "Propuesta formal con alcance definido",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[#C9962A] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#64748B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-[#D8E0EC]/60 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-700 text-[#1C3557] mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-[#64748B] max-w-sm">
                  Gracias por escribirnos. Te responderemos en menos de 24 horas hábiles para coordinar
                  una primera conversación.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#D8E0EC]/60"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block font-[family-name:var(--font-montserrat)] text-xs font-600 text-[#1C3557] uppercase tracking-wide mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full border border-[#D8E0EC] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder:text-[#64748B]/50 focus:outline-none focus:border-[#1C3557] focus:ring-2 focus:ring-[#1C3557]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-montserrat)] text-xs font-600 text-[#1C3557] uppercase tracking-wide mb-2">
                      Empresa / Emprendimiento
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="w-full border border-[#D8E0EC] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder:text-[#64748B]/50 focus:outline-none focus:border-[#1C3557] focus:ring-2 focus:ring-[#1C3557]/10 transition-all"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block font-[family-name:var(--font-montserrat)] text-xs font-600 text-[#1C3557] uppercase tracking-wide mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    autoComplete="email"
                    className="w-full border border-[#D8E0EC] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder:text-[#64748B]/50 focus:outline-none focus:border-[#1C3557] focus:ring-2 focus:ring-[#1C3557]/10 transition-all"
                  />
                </div>

                <div className="mb-5">
                  <label className="block font-[family-name:var(--font-montserrat)] text-xs font-600 text-[#1C3557] uppercase tracking-wide mb-2">
                    Teléfono o WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    autoComplete="tel"
                    inputMode="tel"
                    minLength={8}
                    className="w-full border border-[#D8E0EC] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder:text-[#64748B]/50 focus:outline-none focus:border-[#1C3557] focus:ring-2 focus:ring-[#1C3557]/10 transition-all"
                  />
                </div>

                <div className="mb-5">
                  <label className="block font-[family-name:var(--font-montserrat)] text-xs font-600 text-[#1C3557] uppercase tracking-wide mb-2">
                    Servicio de interés
                  </label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className="w-full border border-[#D8E0EC] rounded-lg px-4 py-3 text-sm text-[#1E293B] bg-white focus:outline-none focus:border-[#1C3557] focus:ring-2 focus:ring-[#1C3557]/10 transition-all"
                  >
                    <option value="">Selecciona una opción</option>
                    <option>Diagnóstico Estratégico y de Gestión</option>
                    <option>Asesoría en Orden y Gestión Básica</option>
                    <option>Estrategias Comerciales y Marketing</option>
                    <option>Diseño de Proyectos de Capacitación</option>
                    <option>Asesoría Individual Específica</option>
                    <option>No estoy seguro / necesito orientación</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block font-[family-name:var(--font-montserrat)] text-xs font-600 text-[#1C3557] uppercase tracking-wide mb-2">
                    Cuéntanos tu situación *
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="¿Cuál es el principal desafío que enfrentas hoy en tu empresa o emprendimiento?"
                    className="w-full border border-[#D8E0EC] rounded-lg px-4 py-3 text-sm text-[#1E293B] placeholder:text-[#64748B]/50 focus:outline-none focus:border-[#1C3557] focus:ring-2 focus:ring-[#1C3557]/10 transition-all resize-none"
                  />
                </div>

                {error && (
                  <p
                    className="mb-4 text-sm text-red-600 font-[family-name:var(--font-montserrat)]"
                    role="alert"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#1C3557] hover:bg-[#152c47] disabled:opacity-60 disabled:pointer-events-none text-white font-[family-name:var(--font-montserrat)] font-600 text-sm px-6 py-4 rounded-lg transition-colors duration-200 group"
                >
                  {loading ? "Enviando…" : "Enviar mensaje"}
                  {!loading && (
                    <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
