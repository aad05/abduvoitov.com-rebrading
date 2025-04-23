import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export const mdxReader = () => {
	const blogDir = "blogs";

	const files = fs.readdirSync(path.join(blogDir));

	const blogs = files.map((filename) => {
		const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

		const { data: frontMatter } = matter(fileContent);
		return {
			meta: frontMatter,
			slug: filename.replace(".mdx", ""),
		};
	});

	return blogs;
};

export const getPost = async (slug: string) => {
	const filePath = path.join("blogs", `${slug}.mdx`);
	const markdownFile = await fs.promises.readFile(filePath, "utf8");

	const { data: fontMatter, content } = matter(markdownFile);

	return {
		fontMatter: { ...fontMatter },
		reading_time: readingTime(markdownFile),
		slug,
		content,
	};
};
