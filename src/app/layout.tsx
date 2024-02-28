import type { Metadata } from "next";
import "./globals.css";

import { Manrope } from "next/font/google";

const AppFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--app-font",
});

export const metadata: Metadata = {
  title: "FE Mentor | Advice Generator",
  description: "Implemented by Jadurani Davalos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={AppFont.className}>{children}</body>
    </html>
  );
}
