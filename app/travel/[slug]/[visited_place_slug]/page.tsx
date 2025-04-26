import VisitedPlacePageView from "@/views/travel/qatar/visited-place";
import type { Metadata } from "next";

type Props = {
	params: {
		slug: string;
		visited_place_slug: string;
	};
};

// Dynamic metadata generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug, visited_place_slug } = params; // No need to await here

	const placeName = visited_place_slug
		.replace(/-/g, " ") // Replace dashes with spaces
		.replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

	return {
		title: placeName,
		description: `${placeName} Travel Diaries - Explore the beauty, culture, and stories of ${placeName} with Abduvoitov Asadbek.`,
		alternates: {
			canonical: `/travel/${slug}/${visited_place_slug}`,
		},
		openGraph: {
			title: `${placeName} - Abduvoitov Asadbek`,
			description: `${placeName} Travel Diaries - Explore the beauty, culture, and stories of ${placeName} with Abduvoitov Asadbek.`,
			url: `https://abduvoitov.vercel.app/travel/${slug}/${visited_place_slug}`,
			siteName: "Abduvoitov Travel Diaries",
			images: [
				{
					url: `https://abduvoitov.vercel.app/api/og?text=${encodeURIComponent(
						`${placeName} - Abduvoitov Asadbek`,
					)}&width=800&height=600`,
					width: 800,
					height: 600,
				},
				{
					url: `https://abduvoitov.vercel.app/api/og?text=${encodeURIComponent(
						`${placeName} - Abduvoitov Asadbek`,
					)}&width=1800&height=1600`,
					width: 1800,
					height: 1600,
					alt: `${placeName} travel highlights and cultural experiences`,
				},
			],
			locale: "en_US",
			type: "website",
		},
	};
}

const VisitedPlacePage = () => {
	return <VisitedPlacePageView />;
};

export default VisitedPlacePage;
