"use client";

import { motion, useAnimationControls } from "framer-motion";
import { type FC, useCallback, useState } from "react";

interface TextSpanProps {
	children: string;
	className?: string;
}

const TextSpan: FC<TextSpanProps> = ({ children, className = "" }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const controls = useAnimationControls();

	const rubberBand = useCallback(() => {
		if (isPlaying) return;

		setIsPlaying(true);
		controls.start({
			transform: [
				"scale3d(1, 1, 1)",
				"scale3d(1.4, 0.55, 1)",
				"scale3d(0.75, 1.25, 1)",
				"scale3d(1.25, 0.85, 1)",
				"scale3d(0.9, 1.05, 1)",
				"scale3d(1, 1, 1)",
			],
			transition: { duration: 0.6 },
		});
	}, [controls, isPlaying]);

	return (
		<motion.span
			animate={controls}
			onMouseOver={rubberBand}
			onAnimationComplete={() => setIsPlaying(false)}
			className={`inline-block cursor-pointer ${className}`}
		>
			{children}
		</motion.span>
	);
};

export default TextSpan;
