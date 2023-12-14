import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Poppins, Vollkorn } from "next/font/google";
import "./globals.css";
import Header from "./global/header";
import Footer from "./global/footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const vollkorn = Vollkorn({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vollkorn",
});

export const metadata: Metadata = {
  title: "Oliver Sinclair",
  description: "Crafting Experiences To Captivate. No Cap.",
  openGraph: {
    images:
      "https://images.ctfassets.net/lgr8vbujxrx3/5MdW0dHYYGUYKLY3qm1fyl/81a533bc6b9b15c55e4e9320638ebf14/Group_2.jpg",
    url: "https://oliver-sinclair.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${vollkorn.variable} scroll-smooth`}
    >
      <body>
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
