import * as React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
// import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Helmi Said | Software Developer",
  description:
    "I'm Helmi, passionate on Front-end Developer, Back-end Developer, and UI-UX Designer. This is my Portfolio website, View my projects, skills, and experience.",
  keywords: [
    "frontend developer",
    "web developer",
    "React developer",
    "Next.js",
    "portfolio",
    "Helmi Said",
    "Helmi",
    "Helmi Unair",
    "Universitas Airlangga",
  ],
  openGraph: {
    title: "Helmi Said | Frontend Developer",
    description:
      "An undergraduate student at Universitas Airlangga, Passionate on Front-end Developer, Back-end Developer, and UI-UX Designer. This is my Portfolio website, View my projects, skills, and experience.",
    url: "https://helmisaid.site",
    siteName: "Helmi Said Portfolio",
    images: [
      {
        url: "https://helmisaid.site/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
