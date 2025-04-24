import fs from "node:fs";
import path from "node:path";
import { getPost } from "@/lib/mdx-reader";
import BlogRendering from "@/views/blog/blog-rendering";
import type { Metadata } from "next";

type PageProps = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams() {
	const files = fs.readdirSync(path.join("blogs"));

	const paths = files.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));

	return paths;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const post = await getPost(params.slug);

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

const Blog = async ({ params }: PageProps) => {
	const post = await getPost(params.slug);

	return (
		<main className="w-full h-[100vh]">
			<BlogRendering post={post} />
		</main>
	);
};

export default Blog;
