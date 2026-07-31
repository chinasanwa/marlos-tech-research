import type { Metadata } from "next";
import SuccessPage from "@/components/shared/SuccessPage";

export const metadata: Metadata = {
  title: "Partnership Request Received",
  description: "Your partnership request with Marlos Tech Research has been received.",
  robots: { index: false, follow: false },
};

export default function PartnershipSuccessPage() {
  return (
    <SuccessPage
      title="Thank You for Your Interest"
      message="Thank you for your interest in partnering with Marlos Tech Research. Our partnership team will review your application and contact you with the next steps."
    />
  );
}
