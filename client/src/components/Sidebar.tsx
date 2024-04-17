import { UserButton } from "@clerk/clerk-react"
import { useLocation, useNavigate } from "react-router-dom"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useSidebarStore } from "../zustand/SidebarStore"
import { NavItems } from "../constants/sidebar-navigations";

const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { isOpen, setIsOpen } = useSidebarStore();

    const handleToggle = () => {
        setIsOpen();
    };

    return (
        <div className={`transition-all overflow-auto bg-slate-300 border shadow-2xl flex flex-col  p-2 ${isOpen ? 'w-72' : 'w-24'}`}>
            <div className='w-full flex justify-end '>
                <span className='text-2xl text-gray-600 hover:scale-125 transition-all cursor-pointer' onClick={handleToggle}> {isOpen ? <FaAngleLeft /> : <FaAngleRight />}</span>
            </div>

            <div className='flex flex-col gap-4 p-4'>
                {NavItems.map((item) => (
                    <div
                        key={item.href} // not use map index for optimization, use unique data
                        onClick={() => navigate(item.href)}
                        className={`flex group flex-row gap-3 items-center p-2 w-full transition-all cursor-pointer rounded-xl ${location.pathname === item.href ? 'bg-slate-400' : 'bg-white hover:bg-slate-100'
                            }`}
                    >
                        <span className='md:text-2xl'> {item.icon} </span>
                        <span className={`md:text-lg overflow-hidden transition-all ${isOpen ? 'w-full' : 'w-0'}`}> {item.title} </span>

                        <div className={`absolute pl-[40px] hidden ${!isOpen && 'group-hover:flex'} `}>
                            <div className='bg-slate-400 text-white relative flex items-center p-2 rounded-[3px]'>
                                <div className='text-xs leading-none font-semibold capitalize'>
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-auto flex justify-center border-t border-slate-100 pt-2'>
                <UserButton />
            </div>
        </div>
    )
}

export default Sidebar