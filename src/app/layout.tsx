import type { Metadata } from "next";
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
  description: "A Project by Shuvam Shrestha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${vollkorn.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
