import TravelPageView from "@/views/travel";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Travel",
	description:
		"Travel Diaries - Explore my journeys around the world, from breathtaking landscapes to cultural experiences. Discover stories, photos, and highlights from the places I've visited.",
	alternates: {
		canonical: "/travel",
	},
	openGraph: {
		title: "Travel - Abduvoitov Asadbek",
		description:
			"Travel Diaries - Explore my journeys around the world, from breathtaking landscapes to cultural experiences. Discover stories, photos, and highlights from the places I've visited.",
		url: "https://abduvoitov.vercel.app/api/og?text='Travel - Abduvoitov Asadbek'",
		siteName: "https://abduvoitov.com/travel",
		images: [
			{
				url: "https://abduvoitov.vercel.app/api/og?text='Travel - Abduvoitov Asadbek'&width=800&height=600",
				width: 800,
				height: 600,
			},
			{
				url: "https://abduvoitov.vercel.app/api/og?text='Travel - Abduvoitov Asadbek'&width=1800&height=1600",
				width: 1800,
				height: 1600,
				alt: "Travel highlights and adventures",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

const Travel = () => {
	return <TravelPageView />;
};

export default Travel;
