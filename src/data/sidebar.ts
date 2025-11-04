import type { SidebarItem } from "../types";
import { LuUsers } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiGear } from "react-icons/pi";

export const sidebarItems: SidebarItem[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: MdOutlineDashboardCustomize
    },
    {
        title: "Profiles",
        icon: LuUsers,
        path: "/profiles",
        children: [],
    },
    {
        title: "Settings",
        icon: PiGear,
        path: "/settings",
    },
]