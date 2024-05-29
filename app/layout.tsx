import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shades Of Prejudice",
  description:
    "A story about two sisters and the prejudice they face due to skin tone.",
  icons: [
    {
      rel: "icon",
      href: "/public/favicon.ico",
      url: "/public/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
