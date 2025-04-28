"use client";

import { Search } from "lucide-react";
import { useState, type FC } from "react";

import { Footer, Navbar } from "@/components/layouts";
import { Input } from "@/components/ui/input";
import { BlogCard, CustomBreadcrumb } from "@/components/generics";
import { IBlog } from "@/interfaces/blog.interface";
import useBreadcrumbs from "@/lib/breadcrumbs";

const BlogPageView: FC<{ data: IBlog[] }> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { blogsBreadcrumbs } = useBreadcrumbs();

  const onSearch = (search: string) => {
    setSearchTerm(search.toLowerCase());
  };

  const filteredData = data.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Navbar />

      <CustomBreadcrumb links={blogsBreadcrumbs} />

      <section id="blogs" className="min-h-[70vh]">
        <div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
          <h1 className="text-5xl font-black">Blog</h1>
          <p className="font-sans font-medium leading-7 mt-8">
            I write mostly about web development, languages, tech careers and
            personal growth. In total, {"I've"} written {data.length} articles
            on this site. Use the search below to filter by title.
          </p>
          <div className="relative mt-4">
            <Input
              onChange={(e) => onSearch(e.target.value)}
              className="h-10"
              placeholder="Search..."
            />
            <Search className="absolute right-4 top-[50%] -translate-y-[50%] text-gray-400" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {data?.map((value) => (
              <BlogCard key={value.id} {...value} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPageView;
