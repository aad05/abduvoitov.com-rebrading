import type { FC } from "react";

const DigitalOne: FC = () => {
	const li_style: string = "pt-2 font-sans font-medium leading-7 italic";
	return (
		<div className="py-5 px-2">
			<div className="flex justify-between">
				<h3 className="text-base font-bold">Frontend Engineer, Digital One</h3>
				<p className="text-sm italic">Jun, 2020 - Sep, 2022</p>
			</div>
			<div className="mt-4 w-full ">
				<ul className="list-disc pl-6 w-full">
					<li className={li_style}>
						As a Frontend Engineer, I leveraged a wide range of technologies to
						build responsive and performant applications. My primary focus was
						on building web applications using React.js, Next.js, TypeScript,
						Redux (including toolkit and thunk middleware implementations),
						Formik, and Material-UI. In addition to these, I also utilized other
						advanced frontend development tools such as Jest and Enzyme for
						testing, Webpack and Babel for efficient bundling and optimization
						of JavaScript code.
					</li>
					<li className={li_style}>
						Identified and emplemented dynamic web solutions in accordance to
						company standards and best practices.
					</li>
					<li className={li_style}>
						JavaScript, Formik, Ant-design, MUI, React, Hooks,
						Styled-Components, Redux (Thunk, Toolkit), Auth-kit, Figma, XD,
						Mocha, Jest, GIT...
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DigitalOne;
