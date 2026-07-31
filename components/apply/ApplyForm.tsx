"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { programs } from "@/data/programs";

const applySchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number").max(20, "Enter a valid phone number"),
  track: z.string().min(1, "Select what you're applying for"),
  message: z.string().optional(),
});

type ApplyFormValues = z.infer<typeof applySchema>;

const TRACK_OPTIONS = [
  { value: "research", label: "Research Programme" },
  ...programs.map((p) => ({ value: p.slug, label: p.title })),
];

export default function ApplyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitting, setSubmitting] = useState(false);

  const programParam = searchParams.get("program");
  const trackParam = searchParams.get("track");
  const defaultTrack = programParam ?? (trackParam === "research" ? "research" : "");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
    defaultValues: { track: defaultTrack },
  });

  useEffect(() => {
    if (defaultTrack) setValue("track", defaultTrack);
  }, [defaultTrack, setValue]);

  const onSubmit = async (values: ApplyFormValues) => {
    setSubmitting(true);
    // Simulated submission — wire up to a real endpoint when available.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Application submitted:", values);
    router.push("/application-success");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
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
          {errors.email && <p className="mt-1.5 text-xs text-accent">{errors.email.message}</p>}
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
          {errors.phone && <p className="mt-1.5 text-xs text-accent">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="track" className="text-sm font-medium text-navy">
            Applying For
          </label>
          <select
            id="track"
            {...register("track")}
            className="mt-2 h-12 w-full rounded-lg border border-paper-line bg-paper-soft px-4 text-sm text-ink outline-none transition-colors focus:border-accent focus:bg-white"
          >
            <option value="">Select a program or track</option>
            {TRACK_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.track && <p className="mt-1.5 text-xs text-accent">{errors.track.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Message <span className="text-ink-faint">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="mt-2 w-full resize-none rounded-lg border border-paper-line bg-paper-soft px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent focus:bg-white"
          placeholder="Tell us anything else that's relevant to your application..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-medium text-white transition-all hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Application
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
