import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "../public/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FluxHR",
  description: "Modern AI Powered HR SaaS Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className="dark scroll-smooth"
        suppressHydrationWarning
      >
        <body
          className={`
            ${satoshi.variable}
            ${inter.variable}
            bg-zinc-950
            text-white
            antialiased
            overflow-x-hidden
          `}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

// hY0SiDTDWnnEdLRN