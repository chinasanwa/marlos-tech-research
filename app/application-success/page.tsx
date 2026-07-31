import type { Metadata } from "next";
import SuccessPage from "@/components/shared/SuccessPage";

export const metadata: Metadata = {
  title: "Application Submitted",
  description: "Your application to Marlos Tech Research has been received.",
  robots: { index: false, follow: false },
};

export default function ApplicationSuccessPage() {
  return (
    <SuccessPage
      title="Application Submitted Successfully"
      message="Thank you for applying to Marlos Tech Research. We have successfully received your application. Our admissions and research team will carefully review your submission."
      detail="If you are shortlisted, you will be contacted with the next steps using the email address or phone number you provided. Please keep an eye on your email and phone."
    />
  );
}
