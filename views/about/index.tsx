"use client";

import type { FC } from "react";

import { Footer, Navbar } from "@/components/layouts";
import Link from "next/link";

const AboutPageView: FC = () => {
	return (
		<>
			<Navbar />
			<section id="about">
				<div className="w-[700px] m-auto p-5 max-[800px]:w-full max-[800px]:py-5 max-[800px]:px-10">
					<h1 className="text-5xl font-black">About</h1>
					<p className="font-sans mt-8 font-medium leading-7">
						{"I'm "}
						<Link
							className="font-semibold text-[#1877FE]"
							href="https://t.me/asadbek_abduvoitov"
						>
							Abduvoitov Asadbek
						</Link>
						, a simple person who can communicate in 4 laguages, software
						engineer and instructor from Namangan, Uzbekistan.
					</p>
					<p className="font-sans font-medium leading-7 mt-4">
						As a software developer, I have been responsible for determining
						project requirements, designing and implementing the software, and
						testing and debugging it to ensure that it meets the specified
						requirements. I also maintain and update the software after it has
						been released. My expertise includes computer programming languages,
						algorithms, and data structures, as well as excellent
						problem-solving and analytical skills.
					</p>
					<p className="font-sans font-medium leading-7 mt-4">
						{"I was"} born and brought up in small vilage with all good
						amenities like a town so called Uchkurgan. I have been interested in
						various games since I was young. My interest in gaming motivated me
						to become a programmer. I have studied IT since I was 14 years old
						and have mastered and taught many frameworks and technologies since
						now.
					</p>
					<p className="font-sans font-medium leading-7 mt-4">
						As a mentor, I teach students how to code front and back side of
						applications. And reviewing codes and helping learners to write
						better and cleaner code. I also participate in Open-Events to share
						my experience with students and making{" "}
						<Link
							className="font-semibold text-[#1877FE]"
							href="https://www.youtube.com/@asadbekabduvoitov9408"
						>
							video lessons
						</Link>
						.
					</p>
					<p className="font-sans font-medium leading-7 mt-4">
						Major purpose for creating such platform/portfolio is helping and
						sharing thoughts and knowledge to community. And aiding to attain
						knowledge more easier than before, becoming better version of
						themselves. You can read or find lots of articles related to IT,
						Language, Science, Islamic Religion and etc...
					</p>
					<p className="font-sans font-medium leading-7 mt-4">
						Thank you for checking and reading all informations carefully. I
						hope
						{"you'll"} be those who find out this platform very beneficial, if{" "}
						{"you'd"}
						like to share your knowledge please go to
						<Link href="#" className="font-semibold text-[#1877FE]">
							{" "}
							Signbook
						</Link>{" "}
						page and kick off posting. ❤️
					</p>
					<iframe
						title="My hometown"
						className="mt-8"
						src="https://www.google.com/maps/d/embed?mid=1IgL6f_sy2Gg-QPPHdKdXk2w3tFT5xH0&ehbc=2E312F"
						width="100%"
						height="280"
					/>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default AboutPageView;
