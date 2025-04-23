import AboutPageView from "@/views/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description:
		"Software Engineer - You may find bunch of information about me.",
	alternates: {
		canonical: "/about",
	},
	openGraph: {
		title: "About - Abduvoitov Asadbek",
		description:
			"Software Engineer - You may find bunch of information about me.",
		url: "https://abduvoitov.vercel.app/api/og?text='About - Abduvoitov Asadbek'",
		siteName: "https://abduvoitov.com/about",
		images: [
			{
				url: "https://abduvoitov.vercel.app/api/og?text='About - Abduvoitov Asadbek'&width=800&height=600",
				width: 800,
				height: 600,
			},
			{
				url: "https://abduvoitov.vercel.app/api/og?text='About - Abduvoitov Asadbek'&width=1800&height=1600",
				width: 1800,
				height: 1600,
				alt: "My custom alt",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function About() {
	return (
		<>
			<main className="w-full h-[100vh]">
				<AboutPageView />
			</main>
		</>
	);
}
