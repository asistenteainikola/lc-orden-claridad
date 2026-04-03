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

/**
 * Google Apps Script suele responder 302 → script.googleusercontent.com.
 * Con redirect automático, fetch puede convertir el POST en GET y Google devuelve HTML.
 * Seguimos redirecciones manualmente repitiendo POST con el mismo cuerpo.
 */
async function postToGoogleAppsScript(
  startUrl: string,
  body: Record<string, string>
): Promise<Response> {
  const payload = JSON.stringify(body);
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  let url = startUrl;
  let response = await fetch(url, {
    method: "POST",
    headers,
    body: payload,
    redirect: "manual",
  });

  for (let hop = 0; hop < 6; hop++) {
    const code = response.status;
    if (code !== 301 && code !== 302 && code !== 303 && code !== 307 && code !== 308) {
      return response;
    }
    const location = response.headers.get("Location");
    if (!location) {
      return response;
    }
    url = new URL(location, url).href;
    response = await fetch(url, {
      method: "POST",
      headers,
      body: payload,
      redirect: "manual",
    });
  }

  return response;
}

export async function POST(request: Request) {
  const webappUrl = process.env.GOOGLE_APPS_SCRIPT_URL?.trim();
  const sharedSecret = process.env.GOOGLE_APPS_SCRIPT_SECRET?.trim();

  if (!webappUrl || !sharedSecret) {
    const missing: string[] = [];
    if (!webappUrl) missing.push("GOOGLE_APPS_SCRIPT_URL");
    if (!sharedSecret) missing.push("GOOGLE_APPS_SCRIPT_SECRET");
    return NextResponse.json(
      {
        error: `Falta configurar en Vercel (entorno Production): ${missing.join(" y ")}. Tras guardarlas, haz un redeploy.`,
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
    upstream = await postToGoogleAppsScript(webappUrl, {
      secret: sharedSecret,
      nombre,
      empresa,
      email,
      telefono,
      servicio,
      mensaje,
    });
  } catch {
    return NextResponse.json(
      { error: "No se pudo conectar con el servicio de correo. Intenta más tarde." },
      { status: 502 }
    );
  }

  const text = (await upstream.text()).trim();
  const status = upstream.status;

  if (!text) {
    return NextResponse.json(
      {
        error:
          "El script de Google no devolvió datos (respuesta vacía). Comprueba la URL del despliegue y que la aplicación web esté publicada.",
      },
      { status: 502 }
    );
  }

  if (text.startsWith("<") || text.startsWith("<!")) {
    return NextResponse.json(
      {
        error:
          "Google devolvió una página HTML en lugar del resultado del script. Suele pasar si GOOGLE_APPS_SCRIPT_URL no es la URL del despliegue «Aplicación web» (debe terminar en /exec), si el acceso no es «Cualquiera» o si hace falta crear una nueva versión del despliegue en Apps Script.",
      },
      { status: 502 }
    );
  }

  let data: { ok?: boolean; error?: string };
  try {
    data = JSON.parse(text) as { ok?: boolean; error?: string };
  } catch {
    return NextResponse.json(
      {
        error: `No se pudo interpretar la respuesta del script (HTTP ${status}). Revisa que la URL en Vercel sea exactamente la que copia Google al desplegar la aplicación web.`,
      },
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
