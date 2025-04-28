import { notFound } from "next/navigation";
import { getBlog } from "@/services/blog.service";
import SingleBlogPageView from "@/views/blog/single-blog";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) {
    return {
      title: "Blog not found",
    };
  }

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title,
    description: blog.content.slice(0, 150),
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.content.slice(0, 150),
      url: `https://abduvoitov.com/blog/${blog.slug}`,
      siteName: "Abduvoitov",
      images: [
        {
          url: "https://abduvoitov.vercel.app/default-blog-cover.png",
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function SingleBlog({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return <SingleBlogPageView data={blog} />;
}
