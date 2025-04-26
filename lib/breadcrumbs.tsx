"use client";

import { useParams } from "next/navigation";

const useBreadcrumbs = () => {
	const { slug } = useParams<{ slug: string }>();

	const travelBreadcrumbs = [
		{ id: "1", title: "Home", path: "/" },
		{ id: "2", title: "Travel", isActive: true },
	];

	const placeToVisitBreadcrumbs = [
		{ id: "1", title: "Home", path: "/" },
		{ id: "2", title: "Travel", path: "/travel" },
		{
			id: "3",
			title: slug ? decodeURIComponent(slug) : "Place",
			isActive: true,
		},
	];

	return { travelBreadcrumbs, placeToVisitBreadcrumbs };
};

export default useBreadcrumbs;
