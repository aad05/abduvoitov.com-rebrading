import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { FC } from "react";
import type { ReadTimeResults } from "reading-time";

const AvatarConfig: FC<{
	post: {
		fontMatter: {
			title?: string;
			description?: string;
			date?: string;
			author?: string;
		};
		reading_time: ReadTimeResults;
		slug: string;
		content: string;
	};
}> = ({ post }) => {
	return (
		<div className="px-4 mt-12 flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
			<div className="flex gap-2 items-center">
				<Avatar>
					<AvatarImage src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/image%2Flogo.png?alt=media&token=28a8445b-54bb-401b-8914-4d91c6b1649b" />
					<AvatarFallback>AA</AvatarFallback>
				</Avatar>
				<p className="font-sans font-medium">
					Abduvoitov Asadbek / {post.fontMatter.date}
				</p>
			</div>
			<div>
				<p className="font-sans text-xs">
					{post?.reading_time?.text} • 12 views
				</p>
			</div>{" "}
		</div>
	);
};

export default AvatarConfig;
