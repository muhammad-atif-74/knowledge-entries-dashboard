import { FaPhoenixSquadron } from "react-icons/fa6"
import { sidebarItems } from "../data/sidebar"
import clsx from "clsx"
import { useUIStore } from "../store/ui-store"
import { useEffect } from "react"
import { useIsMobile } from "../hooks/useIsMobile"
import { Link, useLocation } from "react-router-dom"


const Sidebar = () => {
    const { isSidebarCollapsed: isCollapsed } = useUIStore()
    const setSidebarCollapsed = useUIStore((s) => s.setSidebarCollapsed)
    const isMobile = useIsMobile()
    const location = useLocation()


    useEffect(() => {
        setSidebarCollapsed(isMobile)
    }, [isMobile, setSidebarCollapsed])


    return (
        <aside className={clsx("relative bg-linear-to-t from-primary-300 to-primary-100 dark:from-gray-900 dark:to-gray-900 text-white h-screen py-7 rounded-tr-lg rounded-br-lg shadow-md transition", isCollapsed ? "w-[18%] md:w-[6%]" : "md:w-[17%]")}>

            <div className="logo mb-40 md:mb-32 flex items-center ms-2 gap-5 px-1 md:px-8 cursor-pointer">
                <FaPhoenixSquadron className="text-3xl" />
                {
                    !isCollapsed && <h5 className="text-xl font-semibold">DASH X</h5>
                }
            </div>
            <ul>
                {
                    sidebarItems.map((item) => {
                        const Icon = item.icon
                        const isActive = item.path === location.pathname

                        return (
                            <Link
                                to={item.path}
                                key={item.path}
                                className={`relative flex items-center gap-8 w-full cursor-pointer text-gray-200 px-1 md:px-8 py-6 overflow-hidden hover:bg-white/5 transition ${isActive ? 'bg-white/10 w-full' : ''}`}
                            >
                                <div
                                    className={clsx(
                                        "absolute left-0 top-0 w-1 h-full bg-white dark:bg-gray-400 z-50",
                                        isActive ? "block" : "hidden"
                                    )}
                                ></div>
                                {Icon && <Icon className={clsx("text-2xl md:text-[1.4rem]", isCollapsed && "mx-auto")} />}
                                {
                                    !isCollapsed && <p className="text-4xl md:text-lg">{item.title}</p>
                                }
                            </Link>


                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default Sidebar