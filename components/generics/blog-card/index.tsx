import React from "react";
import Link from "next/link";
import { Eye, Share2 } from "lucide-react";

import { formatDate } from "@/lib/helpers";
import { IBlog } from "@/interfaces/blog.interface";
import { Card, CardContent } from "@/components/ui/card";

const BlogCard: React.FC<IBlog> = ({
  title,
  slug,
  views,
  shares,
  content,
  created_at,
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="shadow-md border dark:hover:bg-[#f9f9f92a] hover:bg-[#0000001d] hover:shadow-lg">
        <CardContent className="cursor-pointer rounded-md transition-colors">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold hover:underline italic">
                {title}
              </h3>

              <ul className="flex gap-2 mt-1 flex-wrap max-w-[300px] sm:max-w-[400px]  md:max-w-[500px]">
                <li className="text-sm text-gray-600 italic">{content}</li>
              </ul>
            </div>
            <div className="flex flex-row md:flex-col justify-between items-end gap-4">
              <p className="text-sm italic text-nowrap">
                {formatDate(created_at)}
              </p>
              <ul className="flex items-center gap-3 md:gap-4">
                <li className="flex items-center gap-1">
                  <Eye className="w-5 h-5" />{" "}
                  <span className="text-sm">{views}</span>
                </li>

                <li className="flex items-center gap-1">
                  <Share2 className="w-5 h-5" />{" "}
                  <span className="text-sm">{shares}</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
