// app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Jamil Codes — Full-Stack Developer",
    template: "%s | Jamil Codes",
  },
  description:
    "Full-stack showcase by Jamil Codes: Django back-end, Next.js & React front-end, open-source templates, DevOps examples, built for real-world impact.",
  keywords: [
    "Jamil Codes",
    "Full-stack Developer",
    "Django",
    "Next.js",
    "React",
    "TailwindCSS",
    "Open Source",
    "DevOps",
    "Portfolio",
  ],
  authors: [{ name: "Jamil Ahmed", url: "https://github.com/jamil-codes" }],
  verification: {
    google: "tTYUedjvegPsaCWEzQe8Rg4NwiolCwO1GHxP5ewpTj0",
  },
  openGraph: {
    title: "Jamil Codes — Full-Stack Developer",
    description:
      "Portfolio of Django & Next.js projects, templates, DevOps examples, and open source. Built with clean architecture and practical tools.",
    url: "https://jamilcodes.com",
    siteName: "Jamil Codes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jamil Codes — Full-Stack Developer",
    description:
      "Check out projects & open-source work with Django, React/Next.js, DevOps examples by Jamil Ahmed.",
    creator: "@jamilcodes",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://jamilcodes.com/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
