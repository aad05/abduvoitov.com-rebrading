import type React from "react";
import Navbar from "../navbar";

interface PropsI {
	id: string;
	title: string;
	children: React.ReactNode;
}

const Section: React.FC<PropsI> = ({ id, title, children }) => {
	return (
		<>
			<Navbar />
			<section id={id}>
				<div className="container">
					<h1 className="text-[28px] md:text-3xl lg:text-4xl xl:text-5xl font-black">
						{title}
					</h1>
					{children}
				</div>
			</section>
		</>
	);
};

export default Section;
