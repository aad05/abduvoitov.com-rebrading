"use client";

import { motion } from "framer-motion";

import { BackgroundCell, TextSpan } from "@/components/constants";
import { Navbar } from "@/components/layouts";
import useNavbarFeatures from "@/components/layouts/navbar/features";

import { v4 as uuidv4 } from "uuid";

// Outside your component
const letters1 = "Software".split("").map((letter) => ({
	id: uuidv4(),
	char: letter,
}));

const letters2 = "Engineer".split("").map((letter) => ({
	id: uuidv4(),
	char: letter,
}));

export default function Home() {
	const { variants, onMouseLeave, cursorVariant, mouseEnterHandler } =
		useNavbarFeatures();

	return (
		<div className="w-full h-[100vh] relative overflow-hidden select-none">
			<motion.div
				className="cursor dark:bg-white"
				variants={variants}
				animate={cursorVariant}
			/>

			<div className="absolute top-0 left-0 w-full h-full z-[0]">
				<BackgroundCell />
			</div>

			<Navbar mode="home" />

			<main className="w-full h-full flex items-center justify-center">
				<div className="flex flex-col">
					<div
						className="text-center relative font-black text-[9vh] md:text-[10vh] lg:text-[12vh] xl:text-[14vh] 2xl:text-[16vh] leading-18 sm:leading-22 md:leading-26 lg:leading-30 xl:leading-36"
						onMouseEnter={mouseEnterHandler}
						onMouseLeave={onMouseLeave}
					>
						{letters1.map(({ id, char }) => (
							<TextSpan key={id}>{char}</TextSpan>
						))}
					</div>
					<div
						className="text-center relative font-black text-[10vh] md:text-[12vh] lg:text-[14vh] xl:text-[16vh] 2xl:text-[18vh]"
						onMouseEnter={mouseEnterHandler}
						onMouseLeave={onMouseLeave}
					>
						{letters2.map(({ id, char }) => (
							<TextSpan key={id}>{char}</TextSpan>
						))}
					</div>
				</div>
			</main>

			<footer className="w-full cursor-none absolute font-semibold text-center bottom-8 left-0">
				<div className="container mx-auto">
					<span className="text-lg md:text-xl lg:text-2xl">
						abduvoitov.com &#169; {new Date().getFullYear()}
					</span>
				</div>
			</footer>
		</div>
	);
}
