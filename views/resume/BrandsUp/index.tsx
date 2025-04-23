import type { FC } from "react";

const BrandsUp: FC = () => {
	const li_style: string = "pt-2 font-sans font-medium leading-7 italic";
	return (
		<div className="py-5 px-2">
			<div className="flex justify-between">
				<h3 className="text-base font-bold">Full-Stack Engineer, Brands UP</h3>
				<p className="text-sm italic">Oct, 2022 - Dec, 2022</p>
			</div>
			<div className="mt-4 w-full ">
				<ul className="list-disc pl-6 w-full">
					<li className={li_style}>
						Developed a web-based project management system that tracks task
						progress, team member assignments, and project timelines, with
						features such as email notifications, analytics, and integrations
						with Google Drive and Trello. Utilized technologies such as React,
						Redux, Node.js, MongoDB, and AWS for hosting and database
						management.
					</li>
					<li className={li_style}>
						Streamlined the build process and enhanced the user interface of a
						large-scale e-commerce platform by implementing front-end frameworks
						such as React and Vue. The improvements resulted in faster website
						loading times, an improved user experience, and reduced bounce
						rates.
					</li>
					<li className={li_style}>
						React Native, Firabase, Amazon WebServices, Google/Yandex Maps,
						MongoDB, MySQL, Testing (JEST, Mocha), Email Automation, Google
						Metrics.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BrandsUp;
