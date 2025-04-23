import ResumePageView from "@/views/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Resume",
	description:
		"Software Engineer - As a seasoned software engineer with over 4 years of experience, I am proficient in designing, developing, and maintaining complex software applications. My expertise spans across various programming languages and development methodologies, allowing me to work across diverse projects, from web and mobile applications to enterprise software solutions.",
	alternates: {
		canonical: "/resume",
	},
	openGraph: {
		title: "Resume - Abduvoitov Asadbek",
		description:
			"Software Engineer - As a seasoned software engineer with over 4 years of experience, I am proficient in designing, developing, and maintaining complex software applications. My expertise spans across various programming languages and development methodologies, allowing me to work across diverse projects, from web and mobile applications to enterprise software solutions.",
		url: "https://abduvoitov.vercel.app/api/og?text='Resume - Abduvoitov Asadbek'",
		siteName: "https://abduvoitov.com/resume",
		images: [
			{
				url: "https://abduvoitov.vercel.app/api/og?text='Resume - Abduvoitov Asadbek'&width=800&height=600",
				width: 800,
				height: 600,
			},
			{
				url: "https://abduvoitov.vercel.app/api/og?text='Resume - Abduvoitov Asadbek'&width=1800&height=1600",
				width: 1800,
				height: 1600,
				alt: "My custom alt",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function Resume() {
	return (
		<>
			<main className="w-full h-[100vh]">
				<ResumePageView />
			</main>
		</>
	);
}
