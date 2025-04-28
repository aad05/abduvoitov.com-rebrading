import { notFound } from "next/navigation";
import { getBlog } from "@/services/blog.service";
import SingleBlogPageView from "@/views/blog/single-blog";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title,
    description: blog.content.slice(0, 150),
    alternates: {
      canonical: `/blog/${params?.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.content.slice(0, 150),
      url: `https://abduvoitov.com/blog/${params?.slug}`,
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
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  return <SingleBlogPageView data={blog} />;
}
