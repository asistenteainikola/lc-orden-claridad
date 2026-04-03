import { NextResponse } from "next/server";

/**
 * Reenvía el formulario a un Web App de Google Apps Script que envía el correo con MailApp.
 * Funciona en Vercel (no depende de Web3Forms ni del dominio del navegador).
 *
 * Vercel / .env.local:
 * - GOOGLE_APPS_SCRIPT_URL — URL del despliegue “Aplicación web”
 * - GOOGLE_APPS_SCRIPT_SECRET — misma cadena que la propiedad WEBAPP_SECRET del script
 */

type Body = {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  servicio?: string;
  mensaje?: string;
};

const LIMITS = {
  nombre: 200,
  empresa: 200,
  email: 320,
  telefono: 40,
  servicio: 200,
  mensaje: 8000,
} as const;

function trim(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

export async function POST(request: Request) {
  const webappUrl = process.env.GOOGLE_APPS_SCRIPT_URL?.trim();
  const sharedSecret = process.env.GOOGLE_APPS_SCRIPT_SECRET?.trim();

  if (!webappUrl || !sharedSecret) {
    return NextResponse.json(
      {
        error:
          "Falta configurar el envío (GOOGLE_APPS_SCRIPT_URL y GOOGLE_APPS_SCRIPT_SECRET en el servidor).",
      },
      { status: 503 }
    );
  }

  let json: Body;
  try {
    json = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const nombre = trim(json.nombre, LIMITS.nombre);
  const empresa = trim(json.empresa, LIMITS.empresa);
  const email = trim(json.email, LIMITS.email);
  const telefono = trim(json.telefono, LIMITS.telefono);
  const servicio = trim(json.servicio, LIMITS.servicio);
  const mensaje = trim(json.mensaje, LIMITS.mensaje);

  if (!nombre || !email || !mensaje || !telefono) {
    return NextResponse.json(
      { error: "Nombre, correo, teléfono y mensaje son obligatorios." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Correo electrónico no válido." }, { status: 400 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(webappUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: sharedSecret,
        nombre,
        empresa,
        email,
        telefono,
        servicio,
        mensaje,
      }),
    });
  } catch {
    return NextResponse.json(
      { error: "No se pudo conectar con el servicio de correo. Intenta más tarde." },
      { status: 502 }
    );
  }

  const text = await upstream.text();
  let data: { ok?: boolean; error?: string };
  try {
    data = JSON.parse(text) as { ok?: boolean; error?: string };
  } catch {
    return NextResponse.json(
      { error: "Respuesta inesperada del servicio de correo." },
      { status: 502 }
    );
  }

  if (!data.ok) {
    return NextResponse.json(
      { error: data.error || "No se pudo enviar el mensaje." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
