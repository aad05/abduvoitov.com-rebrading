import { Separator } from "@/components/ui/separator";
import type { IWorkExperience } from "@/interfaces/experience.interface";
import type React from "react";

const WorkExperience: React.FC<IWorkExperience> = ({
	company,
	location,
	position,
	duration,
	type = [],
	links = [],
	achievements = [],
}) => {
	const li_style: string = "pt-2 font-medium leading-7 italic";

	return (
		<>
			<Separator />
			<div className="py-5 italic">
				{/* Header with position, company, and duration */}
				<div className="flex flex-wrap justify-between gap-4">
					<h3 className="text-base md:text-lg font-bold">
						{position} at {company}
					</h3>

					<p className="text-sm text-gray-600">
						<span className="font-medium">Duration:</span> {duration}
					</p>
				</div>

				{/* Location and Work Type */}
				<div className="flex justify-between items-center mt-2 gap-4">
					<p className="text-sm text-gray-600 capitalize">
						<span className="font-medium">Type:</span> {type.join(", ")}
					</p>
					<p className="text-sm text-gray-600">
						<span className="font-medium">Location:</span> {location}
					</p>
				</div>

				{/* Achievements */}
				{achievements?.length ? (
					<div className="mt-2 w-full pl-2">
						<ul className="list-disc pl-6 w-full">
							{achievements.map((achievement) => (
								<li key={achievement} className={li_style}>
									{achievement}
								</li>
							))}
						</ul>
					</div>
				) : (
					""
				)}

				{/* Links */}
				{links?.length ? (
					<div className="mt-4 w-full pl-2">
						<ul className="list-decimal pl-6 w-full">
							{links.map((link) => (
								<li key={link.title} className={li_style}>
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-500 hover:underline"
									>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default WorkExperience;
