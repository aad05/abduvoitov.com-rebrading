
import type { Metadata } from "next";
import BlogPageView from "@/views/blog";
import { getBlogs } from "@/services/blog.service";
import { IBlog } from "@/interfaces/blog.interface";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Blog",
		description:
			"Software Engineer - Exceptional writing and proofreading skills with the ability to create compelling content across a range of industries and topics.",
		alternates: {
			canonical: "/blog",
		},
		openGraph: {
			title: "Blog - Abduvoitov Asadbek",
			description:
				"Software Engineer - Exceptional writing and proofreading skills with the ability to create compelling content across a range of industries and topics.",
			url: "https://abduvoitov.vercel.app/api/og?text='Blog - Abduvoitov Asadbek'",
			siteName: "https://abduvoitov.com/blog",
			images: [
				{
					url: "https://abduvoitov.vercel.app/api/og?text='Blog - Abduvoitov Asadbek'&width=800&height=600",
					width: 800,
					height: 600,
				},
				{
					url: "https://abduvoitov.vercel.app/api/og?text='Blog - Abduvoitov Asadbek'&width=1800&height=1600",
					width: 1800,
					height: 1600,
					alt: "My custom alt",
				},
			],
			locale: "en_US",
			type: "website",
		},
	};
}

export default async function Blog() {
	const data: IBlog[] = await getBlogs()

	return (
		<main className="w-full h-[100vh]">
			<BlogPageView data={data} />
		</main>
	);
}
