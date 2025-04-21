import { create } from "zustand";

export const useModals = create<{
	siteMap: boolean;
	blogModal: boolean;
	setSiteMap: (payload: boolean) => void;
	setBlogModal: (payload: boolean) => void;
}>((set) => ({
	siteMap: false,
	blogModal: false,
	setSiteMap: (payload) => set({ siteMap: payload }),
	setBlogModal: (payload) => set({ blogModal: payload }),
}));
