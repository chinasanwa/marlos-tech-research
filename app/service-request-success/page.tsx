import type { Metadata } from "next";
import SuccessPage from "@/components/shared/SuccessPage";

export const metadata: Metadata = {
  title: "Request Received",
  description: "Your service request to Marlos Tech Research has been received.",
  robots: { index: false, follow: false },
};

export default function ServiceRequestSuccessPage() {
  return (
    <SuccessPage
      title="Request Received Successfully"
      message="Your request has been received successfully. Our team will contact you shortly to discuss your project."
    />
  );
}
