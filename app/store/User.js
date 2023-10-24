import { create } from "zustand";

export const User = create((set) => ({
	user: {
		uuid: null, //IF THIS IS NULL THERE IS NO USER LOGUED
		name: "John Doe",
		email: "",
	},
	setUser: (user) => set({ user: user }),
	logout: () => set({ user: null }),
}));
