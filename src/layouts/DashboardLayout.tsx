import type React from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import { useUIStore } from "../store/ui-store"
import clsx from "clsx"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { isSidebarCollapsed } = useUIStore()

    return (
        <main className="flex items-start bg-neutral-50 dark:bg-[#1a263c] dark:text-gray-50 h-screen overflow-auto">
            <Sidebar />
            <section className={clsx("content w-full overflow-hidden", isSidebarCollapsed ? "md:w-[94%]" : "md:w-[83%]")}>
                <Header />
                {children}
            </section>
        </main>
    )
}

export default DashboardLayout