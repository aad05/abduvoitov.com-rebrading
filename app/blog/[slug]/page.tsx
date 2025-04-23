import fs from "node:fs";
import path from "node:path";
import { getPost } from "@/lib/mdx-reader";
import BlogRendering from "@/views/blog/blog-rendering";
import type { Metadata } from "next";

// 👇 This type is correct and doesn't need Promise wrapper
type BlogPageProps = {
	params: { slug: string };
};

// ✅ Should not return Promise<BlogPageProps[]>, just plain array
export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const files = fs.readdirSync(path.join("blogs"));

	return files.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));
}

// ✅ Fix typing on generateMetadata
export async function generateMetadata({
	params,
}: BlogPageProps): Promise<Metadata> {
	const post = getPost(params);

	return {
		title: `${post.fontMatter.title}`,
		description: `${post.fontMatter.title} - ${post.fontMatter.description}`,
		alternates: {
			canonical: "/blog",
		},
		openGraph: {
			title: `${post.fontMatter.title} - Abduvoitov Asadbek`,
			description: `${post.fontMatter.title} - ${post.fontMatter.description}`,
			url: `https://abduvoitov.vercel.app/api/og?text='${post.fontMatter.title} - Abduvoitov Asadbek'`,
			siteName: `https://abduvoitov.com/blog/${params.slug}`,
			images: [
				{
					url: `https://abduvoitov.vercel.app/api/og?text='${post.fontMatter.title} - Abduvoitov Asadbek'&width=800&height=600`,
					width: 800,
					height: 600,
				},
				{
					url: `https://abduvoitov.vercel.app/api/og?text='${post.fontMatter.title} - Abduvoitov Asadbek'&width=1800&height=1600`,
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

// ✅ Page component
export default function Blog({ params }: BlogPageProps) {
	const post = getPost(params);

	return (
		<main className="w-full h-[100vh]">
			<BlogRendering post={post} />
		</main>
	);
}
