import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import "swiper/css/bundle";

import "../styles/header.css";
import "../styles/footer.css";

import "../styles/style.css";
import "../styles/responsive.css";

import "maplibre-gl/dist/maplibre-gl.css";

import type { Metadata } from "next";
import { DM_Sans, Exo, Martian_Mono } from "next/font/google";
import SiteHeader from "@/components/siteheader";
import Footer from "@/components/sitefooter";
import { getServicesForMenu } from "@/lib/services";
import { staticMenus } from "@/config/site";
import GoTop from "@/components/global/GoTop";
import { defaultMetadata } from "@/config/metadata";

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

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(metadata)
  const services = getServicesForMenu();
  const menus = staticMenus.map((menu) => {
    if (menu.id === "services") {
      return {
        ...menu,
        children: services,
      };
    }
    return menu;
  });
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${exo.variable} ${martianMono.variable}`}
      >
        <SiteHeader menus={menus} />
        {children}
        <Footer />
        <GoTop/>
      </body>
    </html>
  );
}
