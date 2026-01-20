import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import SpotlightPreview from "@/components/ui/SpotlightPreview";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio built with Next.js, TypeScript, Tailwind, Bun (SSR).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body
        className="min-h-dvh bg-[#0f172a] text-[#e2e8f0]"
        suppressHydrationWarning
      >
        <SpotlightPreview />
        {children}
      </body>
    </html>
  );
}
