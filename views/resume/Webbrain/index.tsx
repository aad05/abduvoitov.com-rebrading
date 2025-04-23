import type { FC } from "react";

const Webbrain: FC = () => {
	const li_style: string = "pt-2 font-sans font-medium leading-7 italic";
	return (
		<div className="py-5 px-2">
			<div className="flex justify-between">
				<h3 className="text-base font-bold">
					Frontend Instructor, Webbrain Academy
				</h3>
				<p className="text-sm italic">Jun, 2020 - Sep, 2022</p>
			</div>
			<div className="mt-4 w-full ">
				<ul className="list-disc pl-6 w-full">
					<li className={li_style}>
						Worked as a Frontend Instructor, Primary technologies: Html, Css,
						JavaScript. React.js
					</li>
					<li className={li_style}>
						Teaching more than 200 students to code web applications.
					</li>
					<li className={li_style}>
						Reviewing codes and helping learners to write better and cleaner
						code.
					</li>
					<li className={li_style}>
						Participating in Open-Events to share my experience with students.
					</li>
					<li className={li_style}>
						Making video lessons mainly on HTML, CSS and JavaScript.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Webbrain;
