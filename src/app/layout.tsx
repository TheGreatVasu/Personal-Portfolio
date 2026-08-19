import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vasu Rastogi — Founder & CEO, Rastogi CodeWorks",
  description:
    "Portfolio of Vasu Rastogi, Founder & CEO of Rastogi CodeWorks. Software developer building structured, secure, and scalable digital solutions from New Delhi, India.",
  keywords: [
    "Vasu Rastogi",
    "Rastogi CodeWorks",
    "full stack developer",
    "New Delhi",
    "software development",
    "IT consulting",
  ],
  authors: [{ name: "Vasu Rastogi" }],
  openGraph: {
    title: "Vasu Rastogi — Founder & CEO, Rastogi CodeWorks",
    description:
      "Software developer and founder delivering structured, secure, and scalable digital solutions.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f1e6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrument.variable}`}>
      <body className="overflow-x-hidden antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              'if("scrollRestoration"in history)history.scrollRestoration="manual";if(location.hash)history.replaceState(null,"",location.pathname+location.search);window.scrollTo(0,0);',
          }}
        />
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
