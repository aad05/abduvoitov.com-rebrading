"use client";

import { useParams } from "next/navigation";

const useBreadcrumbs = () => {
  const { slug, visited_place_slug } = useParams<{
    slug: string;
    visited_place_slug: string;
  }>();

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

  const visitedPlaceToVisitBreadcrumbs = [
    { id: "1", title: "Home", path: "/" },
    { id: "2", title: "Travel", path: "/travel" },
    {
      id: "3",
      title: slug ? decodeURIComponent(slug) : "Place",
      path: `/travel${slug ? decodeURIComponent(slug) : ""}`,
    },
    {
      id: "4",
      title: visited_place_slug
        ? decodeURIComponent(visited_place_slug)
        : "Visited Place",
      isActive: true,
    },
  ];

  const blogsBreadcrumbs = [
    { id: "1", title: "Home", path: "/" },
    { id: "2", title: "Blogs", isActive: true },
  ];

  const singleBlogBreadcrumbs = [
    { id: "1", title: "Home", path: "/" },
    { id: "2", title: "Blogs", path: "/blog" },
    {
      id: "3",
      title: slug ? decodeURIComponent(slug) : "Single Blog",
      isActive: true,
    },
  ];

  return {
    blogsBreadcrumbs,
    travelBreadcrumbs,
    singleBlogBreadcrumbs,
    placeToVisitBreadcrumbs,
    visitedPlaceToVisitBreadcrumbs,
  };
};

export default useBreadcrumbs;
