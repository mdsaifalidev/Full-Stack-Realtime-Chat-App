import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "system",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme)
    set({ theme })
  },
}))
