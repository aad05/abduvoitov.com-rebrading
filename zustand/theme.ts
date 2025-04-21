"use client";

import { useEffect, useState } from "react";
import { create } from "zustand";

type ThemeT = "light" | "dark";

interface UseThemeState {
	theme: ThemeT;
	setTheme: (payload: ThemeT) => void;
}

export const useTheme = create<UseThemeState>((set) => ({
	theme: "light", // Default
	setTheme: (payload) => {
		localStorage.setItem("theme-mode", payload);
		set({ theme: payload });
	},
}));

// ✅ Safe hydration helper hook
export const useHydratedTheme = () => {
	const setTheme = useTheme((s) => s.setTheme);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem("theme-mode");
		if (stored === "dark" || stored === "light") {
			setTheme(stored);
		}
		setMounted(true);
	}, [setTheme]);

	return mounted;
};
