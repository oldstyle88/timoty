import { NextResponse } from "next/server";

type Payload = {
  mode: "reservation" | "contact";
  requestType: "booking" | "general" | "events" | "press";
  locale: string;
  name: string;
  email: string;
  phone?: string;
  guests?: string;
  date?: string;
  time?: string;
  specialRequests?: string;
  subject?: string;
  message?: string;
  source_path?: string | null;
  honeypot?: string;
};

const requiredFields = {
  reservation: ["name", "email", "phone", "guests", "date"] as const,
  contact: ["name", "email", "subject", "message"] as const,
};

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (payload.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const fields = requiredFields[payload.mode];
  for (const field of fields) {
    if (!payload[field]) {
      return NextResponse.json(
        { ok: false, error: `Campo obbligatorio mancante: ${field}` },
        { status: 400 }
      );
    }
  }

  // Optional: integrate with Resend, Supabase, or other backend.
  // For now we accept the request and return success.
  // Configure RESEND_API_KEY, RESEND_FROM, RESERVATION_EMAIL_TO to send emails.
  const resendKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM;
  const emailTo = process.env.RESERVATION_EMAIL_TO ?? process.env.CONTACT_EMAIL_TO;

  if (resendKey && resendFrom && emailTo) {
    const title =
      payload.mode === "reservation"
        ? `Nuova prenotazione Timoty - ${payload.name}`
        : `Nuovo messaggio (${payload.requestType}) - ${payload.name}`;

    const rows: [string, string][] =
      payload.mode === "reservation"
        ? [
            ["Nome", payload.name],
            ["Email", payload.email],
            ["Telefono", payload.phone ?? "-"],
            ["Ospiti", payload.guests ?? "-"],
            ["Data", payload.date ?? "-"],
            ["Orario", payload.time ?? "-"],
            ["Richieste", payload.specialRequests ?? "-"],
          ]
        : [
            ["Nome", payload.name],
            ["Email", payload.email],
            ["Oggetto", payload.subject ?? "-"],
            ["Messaggio", payload.message ?? "-"],
          ];

    const html = `
      <div style="font-family:sans-serif;line-height:1.6;">
        <h1>${title}</h1>
        <table style="border-collapse:collapse;">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:6px 12px;border:1px solid #ddd;background:#f5f5f5;">${k}</td><td style="padding:6px 12px;border:1px solid #ddd;">${v}</td></tr>`
            )
            .join("")}
        </table>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: resendFrom,
        to: [emailTo],
        reply_to: payload.email,
        subject: title,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json(
        { ok: false, error: "Invio non riuscito. Riprova o contattaci per telefono." },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
