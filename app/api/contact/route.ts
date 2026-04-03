import { NextResponse } from "next/server";

/**
 * Reenvía el formulario al webhook de n8n (POST JSON).
 *
 * Variables (solo servidor, p. ej. Vercel / .env.local):
 * - N8N_CONTACT_WEBHOOK_URL — URL completa del nodo Webhook (producción)
 * - N8N_WEBHOOK_SECRET — opcional; si existe, se envía en el header X-N8N-Webhook-Secret
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
  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return NextResponse.json(
      {
        error:
          "Falta N8N_CONTACT_WEBHOOK_URL en el entorno del servidor (Vercel / .env.local).",
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

  const payload = {
    source: "lc-orden-claridad",
    submittedAt: new Date().toISOString(),
    nombre,
    empresa: empresa || undefined,
    email,
    telefono,
    servicio: servicio || undefined,
    mensaje,
  };

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const secret = process.env.N8N_WEBHOOK_SECRET?.trim();
  if (secret) {
    headers["X-N8N-Webhook-Secret"] = secret;
  }

  let upstream: Response;
  try {
    upstream = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });
  } catch {
    return NextResponse.json(
      { error: "No se pudo conectar con el servicio. Intenta más tarde." },
      { status: 502 }
    );
  }

  if (!upstream.ok) {
    const hint = await upstream.text().catch(() => "");
    return NextResponse.json(
      {
        error:
          hint.slice(0, 200) ||
          `El webhook respondió con error (HTTP ${upstream.status}).`,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
