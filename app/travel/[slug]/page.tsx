import QatarPageView from "@/views/travel/qatar";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Qatar",
	description:
		"Qatar Travel Diaries - Experience the modern marvels and rich heritage of Qatar. Discover my journey through its futuristic skylines, cultural treasures, desert adventures, and more.",
	alternates: {
		canonical: "/travel/qatar",
	},
	openGraph: {
		title: "Qatar - Abduvoitov Asadbek",
		description:
			"Qatar Travel Diaries - Experience the modern marvels and rich heritage of Qatar. Discover my journey through its futuristic skylines, cultural treasures, desert adventures, and more.",
		url: "https://abduvoitov.vercel.app/api/og?text='Qatar - Abduvoitov Asadbek'",
		siteName: "https://abduvoitov.com/travel/qatar",
		images: [
			{
				url: "https://abduvoitov.vercel.app/api/og?text='Qatar - Abduvoitov Asadbek'&width=800&height=600",
				width: 800,
				height: 600,
			},
			{
				url: "https://abduvoitov.vercel.app/api/og?text='Qatar - Abduvoitov Asadbek'&width=1800&height=1600",
				width: 1800,
				height: 1600,
				alt: "Qatar travel highlights and cultural experiences",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

const Page = () => {
	return <QatarPageView />;
};

export default Page;
