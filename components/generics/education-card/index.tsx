import { Separator } from "@/components/ui/separator";
import type { IEducation } from "@/interfaces/experience.interface";
import type React from "react";

const Education: React.FC<IEducation> = ({
	major,
	degree,
	location,
	duration,
	institution,
}) => {
	return (
		<>
			<Separator />
			<div className="py-5">
				{/* Degree and Institution */}
				<div className="flex flex-wrap justify-between gap-4">
					<h3 className="text-base md:text-lg font-bold">
						{degree} in {major} at {institution}
					</h3>
					<p className="text-sm italic">{duration}</p>
				</div>

				{/* Location */}
				{location && (
					<p className="mt-2 text-sm text-gray-600">
						<span className="font-medium">Location:</span> {location}
					</p>
				)}
			</div>
		</>
	);
};

export default Education;
