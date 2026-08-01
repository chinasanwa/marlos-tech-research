import nodemailer from "nodemailer";

export interface ContactEmailPayload {
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  subject: string;
  message: string;
  context?: string;
}

function isEmailConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_EMAIL_TO
  );
}

function getTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/**
 * Sends the contact form submission as an email to the configured inbox.
 *
 * If SMTP environment variables haven't been set yet, this intentionally
 * does NOT throw — it logs a clear warning and returns { sent: false } so
 * the surrounding site (and this handler's caller) keeps working during
 * development or before real credentials are provisioned. Once the env
 * vars in .env.example are filled in, sending turns on automatically with
 * no code changes required.
 */
export async function sendContactEmail(payload: ContactEmailPayload) {
  if (!isEmailConfigured()) {
    console.warn(
      "[email] SMTP is not configured — skipping send. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_EMAIL_TO in your environment to enable outgoing email. Submission was still validated and logged below."
    );
    console.info("[email] Contact submission (not sent):", payload);
    return { sent: false as const };
  }

  const transport = getTransport();

  await transport.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL_TO,
    replyTo: payload.email,
    subject: `[Website] ${payload.subject}${payload.context ? ` (${payload.context})` : ""}`,
    text: [
      `Name: ${payload.fullName}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      payload.organization ? `Organization: ${payload.organization}` : null,
      payload.context ? `Context: ${payload.context}` : null,
      "",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  return { sent: true as const };
}
