"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";

import type { PostSlug } from "@/@types";
import { Navbar } from "@/components/layouts";
import { Input } from "@/components/ui/input";

const BlogPageView: FC<{ data: PostSlug[] }> = ({ data }) => {
	const onSearch = async (search: string) => {
		console.log(search);
	};

	return (
		<>
			<Navbar />
			<div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
				<h1 className="text-5xl font-black">Blog</h1>
				<p className="font-sans font-medium leading-7 mt-8">
					I write mostly about web development, languages, tech careers and
					personal growth. In total, {"I've"} written {data.length} articles on
					this site. Use the search below to filter by title.
				</p>
				<div className="relative">
					<Input
						onChange={(e) => onSearch(e.target.value)}
						className="mt-4"
						placeholder="Search..."
					/>
					<Search className="absolute right-4 top-2" />
				</div>
				<div className="mt-12">
					{data.map((value) => (
						<Link key={value.slug} href={`/blog/${value.slug}`}>
							<div className="cursor-pointer p-4 flex mt-4 justify-between dark:hover:bg-[#f9f9f92a] hover:bg-[#0000001d] rounded-md transition-colors">
								<div>
									<h1 className="text-xl font-bold font-sans">
										{value.meta.title}
									</h1>
									<p className="font-medium font-sans text-sm mt-2">
										{value.meta.description}
									</p>
								</div>
								<div>
									<p className="text-sm italic">{value.meta.date}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default BlogPageView;
