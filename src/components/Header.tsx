import { BiBell, BiMoon, BiSearch, BiSun } from "react-icons/bi"
import { FaBars } from "react-icons/fa6"
import { useUIStore } from "../store/ui-store"
import { useTheme } from "../hooks/useTheme"
import { useIsMobile } from "../hooks/useIsMobile"

const Header = () => {
    const { toggleSidebar } = useUIStore()
    const { theme, toggleTheme } = useTheme()
    const isMobile = useIsMobile()

    return (
        <header className="w-full px-6 py-2 flex items-center justify-between border-b border-gray-50 dark:border-gray-800 mb-4 dark:bg-gray-900">
            {!isMobile ? <div className="cursor-pointer w-12 h-12 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center" onClick={toggleSidebar}>
                <FaBars className="text-2xl text-gray-400 hover:text-gray-800 dark:hover:text-gray-50 transition" title="Search" />
            </div> : <a></a>}
            <div className="flex items-center gap-4 ">
                <div className="cursor-pointer">
                    <BiSearch className="text-2xl text-gray-400 hover:text-gray-800 dark:hover:text-gray-50 transition" title="Search" />
                </div>
                <div className="cursor-pointer">
                    <BiBell className="text-2xl text-gray-400 hover:text-gray-800 dark:hover:text-gray-50 transition" title="Notifications" />
                </div>
                <div className="cursor-pointer">
                    {
                        theme === "dark" ?
                            <BiSun className="text-2xl text-gray-400 hover:text-gray-800 dark:hover:text-gray-50 transition" title="Light Mode" onClick={toggleTheme} />
                            :
                            <BiMoon className="text-2xl text-gray-400 hover:text-gray-800 dark:hover:text-gray-50 transition" title="Dark Mode" onClick={toggleTheme} />
                    }
                </div>
                <div className="relative cursor-pointer border-l pl-4 border-gray-200 dark:border-gray-700">
                    <img
                        src="https://avatars.githubusercontent.com/u/583231?v=4"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header