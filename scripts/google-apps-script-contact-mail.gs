/**
 * Google Apps Script — proyecto independiente (script.google.com → Nuevo proyecto)
 * Envía el formulario por correo con MailApp (gratis, cupo diario de Gmail).
 *
 * 1. Crea el proyecto, pega este código y guarda.
 * 2. Ajustes del proyecto → Propiedades del script → añade WEBAPP_SECRET (misma cadena que GOOGLE_APPS_SCRIPT_SECRET en Vercel).
 * 3. Desplegar → Nueva implementación → Aplicación web:
 *    - Ejecutar como: Yo
 *    - Quién tiene acceso: Cualquiera
 * 4. Copia la URL que termina en /exec → GOOGLE_APPS_SCRIPT_URL en Vercel y .env.local (no uses la URL del editor).
 * 5. Si editas el código después: Desplegar → Gestionar implementaciones → lápiz → Versión «Nueva versión» → Desplegar (la URL suele ser la misma).
 * 6. La primera vez, al ejecutar, Google pedirá autorizar el envío de correo.
 *
 * Destinatario fijo (cámbialo aquí si hace falta):
 */
var DESTINO_CORREO = "asistente.ai.nikola@gmail.com";

function doPost(e) {
  var props = PropertiesService.getScriptProperties();
  var expected = props.getProperty("WEBAPP_SECRET");
  var payload;

  try {
    payload = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonOut(false, "JSON inválido");
  }

  if (!expected || payload.secret !== expected) {
    return jsonOut(false, "No autorizado");
  }

  var nombre = String(payload.nombre || "").trim();
  var email = String(payload.email || "").trim();
  var telefono = String(payload.telefono || "").trim();
  var mensaje = String(payload.mensaje || "").trim();

  if (!nombre || !email || !telefono || !mensaje) {
    return jsonOut(false, "Faltan datos obligatorios");
  }

  var empresa = String(payload.empresa || "").trim();
  var servicio = String(payload.servicio || "").trim();

  var html =
    "<p><strong>Nombre:</strong> " +
    escapeHtml(nombre) +
    "</p>" +
    (empresa
      ? "<p><strong>Empresa / emprendimiento:</strong> " + escapeHtml(empresa) + "</p>"
      : "") +
    "<p><strong>Correo:</strong> " +
    escapeHtml(email) +
    "</p>" +
    "<p><strong>Teléfono / WhatsApp:</strong> " +
    escapeHtml(telefono) +
    "</p>" +
    (servicio ? "<p><strong>Servicio de interés:</strong> " + escapeHtml(servicio) + "</p>" : "") +
    "<p><strong>Mensaje</strong></p><p style=\"white-space:pre-wrap\">" +
    escapeHtml(mensaje) +
    "</p>";

  try {
    MailApp.sendEmail({
      to: DESTINO_CORREO,
      subject: "Contacto web — " + nombre,
      htmlBody: html,
      replyTo: email,
    });
  } catch (err) {
    return jsonOut(false, String(err));
  }

  return jsonOut(true, null);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsonOut(ok, errorMessage) {
  var body = { ok: ok };
  if (errorMessage) {
    body.error = errorMessage;
  }
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
