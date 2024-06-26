import { LuHome } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { GrSchedules } from "react-icons/gr";

export const navItems = [
    {
        title: "Home",
        icon: <LuHome />,
        href: "/home",
    },
    {
        title: "Classes",
        icon: <GiTeacher />,
        href: "/classes",
    },
    {
        title: "Students",
        icon: <PiStudent />,
        href: "/students",
    },
    {
        title: "Schedule",
        icon: <GrSchedules />,
        href: "/schedule",
    },
];