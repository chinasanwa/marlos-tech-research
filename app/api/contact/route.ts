import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

const contactPayloadSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  organization: z.string().max(160).optional(),
  subject: z.string().min(2).max(160),
  message: z.string().min(10).max(4000),
  context: z.string().max(40).optional(),
  // Honeypot field: a real visitor never fills this in (it's hidden from
  // view via CSS). Bots that auto-fill every field will populate it, which
  // lets us silently reject the submission without a CAPTCHA.
  company: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactPayloadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  // Honeypot tripped — pretend success so the bot doesn't learn anything,
  // but never actually send an email.
  if (parsed.data.company) {
    return NextResponse.json({ success: true });
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/contact] Failed to send email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't send your message right now. Please try again shortly.",
      },
      { status: 502 }
    );
  }
}
