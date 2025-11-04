import { create } from "zustand"
import type { UIState } from "../types"


export const useUIStore = create<UIState>((set) => ({
    isSidebarCollapsed: false,
    theme: "light",


    toggleSidebar: () =>
        set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),

    toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),

    setSidebarCollapsed: (value: boolean) =>
        set({ isSidebarCollapsed: value }),

}))