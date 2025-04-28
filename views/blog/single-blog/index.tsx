'use client'

import { CustomBreadcrumb } from "@/components/generics";
import { Footer, Navbar } from "@/components/layouts";
import { IBlog } from "@/interfaces/blog.interface";
import useBreadcrumbs from "@/lib/breadcrumbs";

interface SingleBlogPageViewProps {
  data: IBlog;
}

const SingleBlogPageView = ({ data }: SingleBlogPageViewProps) => {
  const { singleBlogBreadcrumbs } = useBreadcrumbs();

  return (
    <>
      <Navbar />

      <CustomBreadcrumb links={singleBlogBreadcrumbs} />

      <section id="single-blog" className="min-h-[70vh]">
        <div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-gray-500 mb-8">
            {new Date(data.created_at).toLocaleDateString()} • {data.views}{" "}
            views
          </p>
          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SingleBlogPageView;
