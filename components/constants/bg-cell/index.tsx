"use client";

import { type FC, useEffect, useState } from "react";

const BackgroundCell: FC = () => {
	const [cols, setCols] = useState(0);
	const [rows, setRows] = useState(0);

	useEffect(() => {
		const calculateGrid = () => {
			if (window.innerWidth < 480) {
				// Small devices (mobile)
				setCols(Math.floor(window.innerWidth / 70));
				setRows(Math.floor(window.innerHeight / 100));
			} else if (window.innerWidth < 768) {
				// Medium devices (tablets)
				setCols(Math.floor(window.innerWidth / 80));
				setRows(Math.floor(window.innerHeight / 100));
			} else if (window.innerWidth < 1024) {
				// Large devices (small desktops)
				setCols(Math.floor(window.innerWidth / 90));
				setRows(Math.floor(window.innerHeight / 100));
			} else {
				// Extra Large devices (large desktops)
				setCols(Math.floor(window.innerWidth / 100));
				setRows(Math.floor(window.innerHeight / 110));
			}
		};

		calculateGrid(); // Initial calculation
		window.addEventListener("resize", calculateGrid); // Re-calculate on resize

		return () => window.removeEventListener("resize", calculateGrid); // Cleanup on component unmount
	}, []);

	return (
		<div
			className="w-screen h-screen grid fixed top-0 left-0 -z-10"
			style={{
				gridTemplateColumns: `repeat(${cols}, 1fr)`,
				gridTemplateRows: `repeat(${rows}, 1fr)`,
			}}
		>
			{Array.from({ length: cols * rows }).map(() => (
				<div
					key={crypto.randomUUID()}
					className="border border-[#eef0f4] dark:border-[#1F2937]"
				/>
			))}
		</div>
	);
};

export default BackgroundCell;
