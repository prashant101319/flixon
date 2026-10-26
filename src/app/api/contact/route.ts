import { NextResponse } from "next/server";

const clean = (v: unknown, max = 2000) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const enquiry = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    company: clean(body.company, 160),
    service: clean(body.service, 120),
    budget: clean(body.budget, 60),
    message: clean(body.message, 5000),
    receivedAt: new Date().toISOString(),
  };

  if (enquiry.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email) || enquiry.message.length < 10) {
    return NextResponse.json({ ok: false, error: "Please check the form fields." }, { status: 422 });
  }

  /*
   * TODO: deliver the enquiry. Pick one:
   *  - Amazon SES (AWS SDK v3 @aws-sdk/client-sesv2) to email it to your sales inbox
   *  - Resend / SendGrid email API
   *  - Save to a database or push to your CRM (HubSpot, Zoho, Salesforce)
   * Keep API keys in environment variables (.env.local), never in this file.
   */
  console.log("New website enquiry:", enquiry);

  return NextResponse.json({ ok: true });
}
