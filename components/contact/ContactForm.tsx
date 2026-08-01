"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number"),
  organization: z.string().optional(),
  subject: z.string().min(2, "Let us know what this is about"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  // Honeypot — always empty for real visitors, hidden via CSS below.
  company: z.string().max(0).optional().or(z.literal("")),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Routes this form to the right confirmation page based on the context it
// was opened with (?type=consultation from Services, ?type=partnership from
// Partnerships, otherwise the general contact confirmation).
function resolveSuccessPath(type: string | null) {
  if (type === "consultation") return "/service-request-success";
  if (type === "partnership") return "/partnership-success";
  return "/contact-success";
}

export default function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const context = searchParams.get("type") ?? undefined;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, context }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      router.push(resolveSuccessPath(searchParams.get("type")));
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your message right now. Please try again shortly."
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl2 border border-paper-line bg-white p-6 shadow-card md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Honeypot field: hidden from sighted users and off the tab order,
            but visible to naive bots that fill in every input. */}
        <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company")}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="text-sm font-medium text-navy">
              Full Name
            </label>
            <input
              id="fullName"
              {...register("fullName")}
              className="mt-2 h-12 w-full rounded-lg border border-paper-line bg-paper-soft px-4 text-sm text-ink outline-none transition-colors focus:border-accent focus:bg-white"
              placeholder="Chidinma Okeke"
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-accent">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-navy">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="mt-2 h-12 w-full rounded-lg border border-paper-line bg-paper-soft px-4 text-sm text-ink outline-none transition-colors focus:border-accent focus:bg-white"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-accent">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-navy">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="mt-2 h-12 w-full rounded-lg border border-paper-line bg-paper-soft px-4 text-sm text-ink outline-none transition-colors focus:border-accent focus:bg-white"
              placeholder="+234 800 000 0000"
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-accent">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="organization" className="text-sm font-medium text-navy">
              Organization <span className="text-ink-faint">(optional)</span>
            </label>
            <input
              id="organization"
              {...register("organization")}
              className="mt-2 h-12 w-full rounded-lg border border-paper-line bg-paper-soft px-4 text-sm text-ink outline-none transition-colors focus:border-accent focus:bg-white"
              placeholder="Company or institution"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-medium text-navy">
            Subject
          </label>
          <input
            id="subject"
            {...register("subject")}
            className="mt-2 h-12 w-full rounded-lg border border-paper-line bg-paper-soft px-4 text-sm text-ink outline-none transition-colors focus:border-accent focus:bg-white"
            placeholder="What is this regarding?"
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-accent">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-navy">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className="mt-2 w-full resize-none rounded-lg border border-paper-line bg-paper-soft px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent focus:bg-white"
            placeholder="Tell us a bit about what you need..."
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-accent">{errors.message.message}</p>
          )}
        </div>

        {errorMessage && (
          <div className="flex items-start gap-2.5 rounded-lg bg-accent-soft px-4 py-3 text-sm text-accent">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-medium text-white transition-all hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
