import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-body" });
const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Metryczki Dla Dzieci",
  description: "Personalizowane pamiątki narodzin",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${nunito.variable} ${baloo.variable} bg-sky-soft font-body text-ink`}>
        {children}
      </body>
    </html>
  );
}
