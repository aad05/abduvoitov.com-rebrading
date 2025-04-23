import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import type { FC } from "react";

import { getPost } from "@/lib/mdx-reader";
import BlogRendering from "@/views/blog/blog-rendering";

type Props = {
	params: { slug: string };
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const files = fs.readdirSync(path.join("blogs"));

	return files.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const post = await getPost(params.slug);

	return {
		title: post.fontMatter.title,
		description: `${post.fontMatter.title} - ${post.fontMatter.description}`,
		alternates: {
			canonical: `/blog/${params.slug}`,
		},
		openGraph: {
			title: `${post.fontMatter.title} - Abduvoitov Asadbek`,
			description: post.fontMatter.description,
			url: `https://abduvoitov.vercel.app/api/og?text=${post.fontMatter.title}`,
			siteName: "abduvoitov.com",
			images: [
				{
					url: `https://abduvoitov.vercel.app/api/og?text=${post.fontMatter.title}&width=800&height=600`,
					width: 800,
					height: 600,
				},
			],
			locale: "en_US",
			type: "article",
		},
	};
}

const Blog: FC<Props> = async ({ params }) => {
	const post = await getPost(params.slug);

	return (
		<main className="w-full h-[100vh]">
			<BlogRendering post={post} />
		</main>
	);
};

export default Blog;
