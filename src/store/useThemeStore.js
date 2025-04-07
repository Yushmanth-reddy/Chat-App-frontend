import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme-coffee") || "coffee",

  setTheme: (theme) => {
    localStorage.setItem("theme-coffee", theme);
    set({ theme });
  },
}));
