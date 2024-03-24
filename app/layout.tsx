import type { Metadata } from "next";
// import { Poppins, Playfair_Display } from "next/font/google";

import "./globals.css";
import { NextAuthProvider } from "@/components/layouts/NextAuthProvider";
import { authOptions } from "@/lib/nextauth";
import { getServerSession } from "next-auth";

// const playfair_display = Playfair_Display({
//   preload: false,
//   variable: "--font-playdisplay",
// });
// const poppin = Poppins({
//   weight: "400",
//   preload: false,
//   variable: "--font-poppins",
// });

export const metadata: Metadata = {
  title: "Soal Test PT Vascomm",
  description: "Soal Test PT vascomm - lorem ipsum",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={``}>
        <NextAuthProvider session={session}>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
