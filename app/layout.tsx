import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";

import "./globals.css";

const playfair_display = Playfair_Display({
  preload: false,
  variable: "--font-playdisplay",
});
const poppin = Poppins({
  weight: "400",
  preload: false,
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Soal Test PT Vascomm",
  description: "Soal Test PT vascomm - lorem ipsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair_display.className} ${poppin.className}`}>
        {children}
      </body>
    </html>
  );
}
