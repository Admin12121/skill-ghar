import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import "swiper/css/bundle";

import "../styles/header.css";
import "../styles/footer.css";

import "../styles/style.css";
import "../styles/responsive.css";


import type { Metadata } from "next";
import { DM_Sans, Exo, Martian_Mono } from "next/font/google";
import SiteHeader from "@/components/siteheader";
import Footer from "@/components/sitefooter";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Edifico - React Next.js Building Construction & Renovation Company Template",
  description:
    "Edifico is a modern and responsive React Next.js template designed for building, construction, and renovation companies. It offers a professional layout, fast performance, and easy customization to showcase services and projects effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${exo.variable} ${martianMono.variable}`}
      >
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
