import { HiOutlineHome } from "react-icons/hi2";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";

export const NavItems = [
    {
        title: "Home",
        icon: <HiOutlineHome />,
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
];