import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marlostechresearch.com"),
  title: {
    default: "Marlos Tech Research | Building Africa's Future Through Technology",
    template: "%s | Marlos Tech Research",
  },
  description:
    "Marlos Tech Research is a technology research institute in Aba, Abia State, building Africa's future through research, innovation, and talent development.",
  keywords: [
    "Marlos Tech Research",
    "technology research Nigeria",
    "AI training Aba",
    "cybersecurity training Nigeria",
    "tech talent development Africa",
  ],
  openGraph: {
    title: "Marlos Tech Research",
    description:
      "Building Africa's Future Through Research, Innovation & Talent Development.",
    url: "https://marlostechresearch.com",
    siteName: "Marlos Tech Research",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marlos Tech Research",
    description:
      "Building Africa's Future Through Research, Innovation & Talent Development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
