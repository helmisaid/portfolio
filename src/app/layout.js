import * as React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Helmi Said | Frontend Developer",
  description: "An undergraduate student at Universitas Airlangga, Passionate on Front-end Developer, Back-end Developer, and UI-UX Designer. This is my Portfolio website, View my projects, skills, and experience.",
  keywords: ["frontend developer", "web developer", "React developer", "Next.js", "portfolio", "Helmi Said", "Helmi", "Helmi Unair", "Universitas Airlangga"],
  openGraph: {
    title: "Helmi Said | Frontend Developer",
    description: "An undergraduate student at Universitas Airlangga, Passionate on Front-end Developer, Back-end Developer, and UI-UX Designer. This is my Portfolio website, View my projects, skills, and experience.",
    type: "website",
    locale: "en_US",
    url: "helmisaid.site",
    siteName: "Helmi Said Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
      <html className="scroll-smooth" lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    
  );
}
