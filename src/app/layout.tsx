import type { Metadata } from "next";
import { Lora, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Colorado Insurance Services | Denver Metro Insurance Agency",
    template: "%s | Colorado Insurance Services",
  },
  description:
    "Colorado Insurance Services is a local, independent insurance agency serving the Denver Metro Area. Personal and commercial insurance with a human touch. Home, Auto, Business & more.",
  metadataBase: new URL("https://coloradoinsuranceservices.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Colorado Insurance Services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${urbanist.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
