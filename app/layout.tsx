import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "@/styles/_keyframe-animations.css";
import "@/styles/_variables.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Asadbek Abduvoitov",
		template: "%s | Asadbek Abduvoitov",
	},
	description:
		"Welcome to abduvoitov.com — the digital space of Asadbek Abduvoitov, a software engineer specializing in modern web development from Uzbekistan.",
	keywords: [
		"Asadbek Abduvoitov",
		"Software Engineer",
		"Web Developer",
		"Frontend Developer",
		"Uzbekistan Developer",
		"React Developer",
	],
	authors: [
		{
			name: "Asadbek Abduvoitov",
			url: "https://abduvoitov.com",
		},
	],
	creator: "Asadbek Abduvoitov",
	metadataBase: new URL("https://abduvoitov.com"),
	openGraph: {
		title: "Asadbek Abduvoitov | Software Engineer",
		description:
			"Explore projects, articles, and insights by Asadbek Abduvoitov — a frontend-focused software engineer from Uzbekistan.",
		url: "https://abduvoitov.com",
		siteName: "Asadbek Abduvoitov",
		images: [
			{
				url: "/me.png",
				width: 1200,
				height: 630,
				alt: "Asadbek Abduvoitov Profile Image",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Asadbek Abduvoitov | Software Engineer",
		description:
			"Follow the journey of Asadbek Abduvoitov, a modern web developer building intuitive, fast, and accessible websites.",
		images: ["/me.png"],
		creator: "@asadbekdev", // If you have a Twitter handle, add it here
	},
	other: {
		telegram: "https://t.me/@al_asadullah", // Optional - update with your actual Telegram username
		github: "https://github.com/aad05", // Optional
		linkedin: "https://linkedin.com/in/abduvoitov-asadbek", // Optional
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
