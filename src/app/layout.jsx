// app/layout.js or wherever your RootLayout is

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
	metadataBase: new URL("https://jamil-codes.github.io"),
	title: {
		default: "Jamil Codes — Full-Stack Developer",
		template: "%s | Jamil Codes",
	},
	description: "Full-stack showcase by Jamil Codes: Django back-end, Next.js & React front-end, open-source templates, DevOps examples, built for real-world impact.",
	keywords: ["Jamil Codes", "Full-stack Developer", "Django", "Next.js", "React", "TailwindCSS", "Open Source", "DevOps", "Portfolio"],
	authors: [{ name: "Jamil Ahmed", url: "https://github.com/jamil-codes" }],
	verification: {
    google: "google-site-verification=lsdRd2YPdm8D3hXPtss6Q3QqlGivHS4dBc1kkIfJvX8",
 	},
	openGraph: {
		title: "Jamil Codes — Full-Stack Developer",
		description: "Portfolio of Django & Next.js projects, templates, DevOps examples, and open source. Built with clean architecture and practical tools.",
		url: "https://jamil-codes.github.io",
		siteName: "Jamil Codes",
		images: [
			{
				url: "/header.png", // or some OG image in public folder
				width: 1200,
				height: 630,
				alt: "Jamil Codes Portfolio",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Jamil Codes — Full-Stack Developer",
		description: "Check out projects & open-source work with Django, React/Next.js, DevOps examples by Jamil Ahmed.",
		images: ["/header.png"],
		creator: "@jamilcodes", // replace if your twitter/X handle is different
	},
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
