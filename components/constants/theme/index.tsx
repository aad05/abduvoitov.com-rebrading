"use client";

import { Button } from "@/components/ui/button";
import { useHydratedTheme, useTheme } from "@/zustand/theme";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const Theme: React.FC = () => {
	const mounted = useHydratedTheme();
	const { setTheme, theme } = useTheme();

	// On initial mount, read from localStorage
	useEffect(() => {
		const storedTheme = localStorage.getItem("theme-mode") as
			| "light"
			| "dark"
			| null;
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, [setTheme]);

	// Apply theme class to <html> tag (Tailwind prefers this)
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme-mode", theme);
	}, [theme]);

	const toggleTheme = () => {
		const newMode = theme === "dark" ? "light" : "dark";
		setTheme(newMode);
	};

	if (!mounted) return null;

	return (
		<Button variant="outline" onClick={toggleTheme} size="default">
			{theme === "dark" ? (
				<Moon className="w-5 h-5" />
			) : (
				<Sun className="w-5 h-5" />
			)}
		</Button>
	);
};

export default Theme;
