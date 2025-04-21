"use client";

import type { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CursorVariant = "default" | "text";

interface MousePosition {
	x: number;
	y: number;
}

const LETTERS = "Abcdefghijklmnopqrstuvwxyz";

const useNavbarFeatures = () => {
	const hasVisited = useRef(false);
	const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const mouseMove = (e: MouseEvent) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};
		window.addEventListener("mousemove", mouseMove);
		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	useEffect(() => {
		if (!hasVisited.current) {
			//   visitWebsite(); // Call the function only once
			hasVisited.current = true;
		}
	}, []);

	const variants: Variants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
		},
		text: {
			x: mousePosition.x,
			y: mousePosition.y,
			backgroundColor: "transparent",
		},
	};

	let interval: NodeJS.Timeout;

	const onMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
		mouseEnterHandler(); // Your external handler

		let iteration = 0;
		clearInterval(interval); // Clear previous interval if any

		const target = e.target as HTMLElement;
		const originalText = target.dataset.value || target.innerText;

		interval = setInterval(() => {
			const scrambledText = originalText
				.split("")
				.map((char, index) => {
					if (index < iteration) {
						return originalText[index];
					}
					return LETTERS[Math.floor(Math.random() * LETTERS.length)];
				})
				.join("");

			target.innerText = scrambledText;

			iteration += 1 / 3;

			if (iteration >= originalText.length) {
				clearInterval(interval);
				target.innerText = originalText; // Restore clean text at the end
			}
		}, 30);
	};

	const mouseEnterHandler = () => setCursorVariant("text");
	const onMouseLeave = () => setCursorVariant("default");

	return {
		onMouseLeave,
		cursorVariant,
		onMouseEnter,
		variants,
		mouseEnterHandler,
	};
};

export default useNavbarFeatures;
