import type { IconType } from "react-icons"

export interface SidebarItem {
    title: string
    icon?: IconType
    path: string
    children?: SidebarItem[]
}

export interface UIState {
    isSidebarCollapsed: boolean
    theme: "light" | "dark"
    toggleSidebar: () => void
    toggleTheme: () => void
    setSidebarCollapsed: (value: boolean) => void
}

export interface KnowledgeEntry {
    id: string
    title: string
    content: string
    createdAt?: Date | string
}

export type NewKnowledgeEntry = Omit<KnowledgeEntry, "id">