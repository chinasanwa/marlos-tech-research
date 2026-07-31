import type { Metadata } from "next";
import SuccessPage from "@/components/shared/SuccessPage";

export const metadata: Metadata = {
  title: "Message Sent",
  description: "Your message to Marlos Tech Research has been received.",
  robots: { index: false, follow: false },
};

export default function ContactSuccessPage() {
  return (
    <SuccessPage
      title="Message Sent Successfully"
      message="Thank you for contacting Marlos Tech Research. We have received your message. Our team will respond as soon as possible."
    />
  );
}
