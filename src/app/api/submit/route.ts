import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const FROM = "Shain Mercer <shainm@pacificassoc.com>";
// Shain's monitored inbox (Microsoft 365 on pacificassociates.com).
// The From address stays on the Resend-verified pacificassoc.com domain.
const NOTIFY_TO = "shainm@pacificassociates.com";
const PRIVACY_URL = "https://www.pacificassoc.com/privacy";
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Verify a Cloudflare Turnstile token server-side. Returns true only when
// Cloudflare confirms the token is valid.
async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("submit: TURNSTILE_SECRET_KEY not configured");
    return false;
  }
  const body = new URLSearchParams();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);
  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const outcome = (await res.json()) as { success?: boolean };
    return outcome.success === true;
  } catch (e) {
    console.error("submit: turnstile verification request failed", e);
    return false;
  }
}

interface Creditor {
  name?: string;
  balance?: string;
}

const esc = (s: unknown) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

const toNumber = (v: unknown) =>
  parseFloat(String(v ?? "").replace(/[^0-9.]/g, "")) || 0;

// Follow-up email sent TO the lead.
function leadEmail() {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#1B2B4B;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1B2B4B;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
            <tr>
              <td align="center" style="padding-bottom:28px;">
                <span style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:bold;letter-spacing:3px;color:#C9922A;">PACIFIC ASSOCIATES</span>
              </td>
            </tr>
            <tr>
              <td style="padding:0 8px 20px;">
                <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.3;color:#E5B04A;font-weight:bold;">Reduce your debt faster and for less money.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0 8px;">
                <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.65;color:#D7DCE5;">I&rsquo;m reaching out to share how Pacific Associates could help you reduce your debt faster and for less money than if you kept making minimum payments.</p>
                <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.65;color:#D7DCE5;">If you&rsquo;re ready to learn more, let&rsquo;s discuss the details together. Give me a call at <a href="tel:8662957500" style="color:#E5B04A;text-decoration:none;font-weight:bold;">866-295-7500</a>, or let me know a time that works for you.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px;border-top:1px solid rgba(201,146,42,0.35);">
                <p style="margin:16px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#FFFFFF;">
                  <strong style="color:#C9922A;">Shain Mercer</strong><br/>
                  Vice President, Pacific Associates<br/>
                  Phone: <a href="tel:8662957500" style="color:#D7DCE5;text-decoration:none;">866-295-7500</a><br/>
                  Direct: <a href="tel:9492501851" style="color:#D7DCE5;text-decoration:none;">(949) 250-1851</a><br/>
                  Email: <a href="mailto:shainm@pacificassociates.com" style="color:#D7DCE5;text-decoration:none;">shainm@pacificassociates.com</a>
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:32px 8px 6px;">
                <span style="font-family:Georgia,'Times New Roman',serif;font-size:16px;font-weight:bold;letter-spacing:2px;color:#C9922A;">PACIFIC ASSOCIATES</span>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:6px 8px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.6;color:#8A93A6;">
                  <a href="${PRIVACY_URL}" style="color:#8A93A6;text-decoration:underline;">Disclaimers</a> &middot;
                  <a href="${PRIVACY_URL}" style="color:#8A93A6;text-decoration:underline;">Privacy Policy</a> &middot;
                  <a href="${PRIVACY_URL}" style="color:#8A93A6;text-decoration:underline;">Unsubscribe</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

// Notification email sent TO Shain with all lead details.
function notifyEmail(
  d: Record<string, unknown>,
  creditors: Creditor[],
  totalFmt: string,
  monthlyFmt: string,
) {
  const rows =
    creditors
      .filter((c) => c.name || c.balance)
      .map(
        (c) =>
          `<tr><td style="padding:6px 10px;border:1px solid #E8E2D9;">${esc(c.name || "—")}</td><td style="padding:6px 10px;border:1px solid #E8E2D9;">${esc(c.balance || "—")}</td></tr>`,
      )
      .join("") ||
    `<tr><td colspan="2" style="padding:6px 10px;border:1px solid #E8E2D9;color:#888;">None provided</td></tr>`;
  const field = (label: string, value: unknown) =>
    `<tr><td style="padding:6px 10px;border:1px solid #E8E2D9;font-weight:bold;background:#F3F0EB;">${label}</td><td style="padding:6px 10px;border:1px solid #E8E2D9;">${esc(value)}</td></tr>`;
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#1A1A1A;">
    <h2 style="font-family:Georgia,serif;color:#1B2B4B;margin:0 0 16px;">New Free Quote Lead</h2>
    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px;font-size:14px;">
      ${field("First Name", d.firstName)}
      ${field("Last Name", d.lastName)}
      ${field("Email", d.email)}
      ${field("Phone", d.phone)}
      ${field("Zip Code", d.zip)}
      ${field("Total Balance", "$" + totalFmt)}
      ${field("Est. Monthly (÷36)", "$" + monthlyFmt)}
    </table>
    <h3 style="font-family:Georgia,serif;color:#1B2B4B;margin:20px 0 8px;">Creditors</h3>
    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px;font-size:14px;">
      <tr><th style="padding:6px 10px;border:1px solid #E8E2D9;text-align:left;background:#F3F0EB;">Creditor</th><th style="padding:6px 10px;border:1px solid #E8E2D9;text-align:left;background:#F3F0EB;">Balance</th></tr>
      ${rows}
    </table>
  </body>
</html>`;
}

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid body" }, { status: 400 });
  }

  // Bot protection: verify the Turnstile token before doing anything else.
  const token = String(data.turnstileToken || "");
  if (!token) {
    return NextResponse.json(
      { ok: false, error: "missing captcha token" },
      { status: 400 },
    );
  }
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const human = await verifyTurnstile(token, ip);
  if (!human) {
    return NextResponse.json(
      { ok: false, error: "captcha verification failed" },
      { status: 400 },
    );
  }

  const email = String(data.email || "").trim();
  if (!email) {
    return NextResponse.json({ ok: false, error: "missing email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "email service not configured" },
      { status: 500 },
    );
  }

  const creditors: Creditor[] = Array.isArray(data.creditors)
    ? (data.creditors as Creditor[])
    : [];
  const totalBalance = creditors.reduce((sum, c) => sum + toNumber(c.balance), 0);
  const monthly = Math.max(0, Math.round(totalBalance / 36));
  const monthlyFmt = monthly.toLocaleString("en-US");
  const totalFmt = Math.round(totalBalance).toLocaleString("en-US");

  const resend = new Resend(apiKey);

  const [leadResult, notifyResult] = await Promise.allSettled([
    resend.emails.send({
      from: FROM,
      to: email,
      replyTo: NOTIFY_TO,
      subject: "Reduce your debt faster with Pacific Associates",
      html: leadEmail(),
    }),
    resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `New free quote lead: ${data.firstName ?? ""} ${data.lastName ?? ""}`.trim(),
      html: notifyEmail(data, creditors, totalFmt, monthlyFmt),
    }),
  ]);

  const leadOk = leadResult.status === "fulfilled" && !leadResult.value.error;
  const notifyOk = notifyResult.status === "fulfilled" && !notifyResult.value.error;

  // Succeed as long as the lead notification reached Shain (lead capture is
  // the priority); report per-email status so failures are visible in logs.
  if (!notifyOk) {
    console.error("submit: notification email failed", notifyResult);
    return NextResponse.json(
      { ok: false, leadOk, notifyOk },
      { status: 502 },
    );
  }
  if (!leadOk) console.error("submit: lead follow-up email failed", leadResult);

  return NextResponse.json({ ok: true, leadOk, notifyOk });
}
