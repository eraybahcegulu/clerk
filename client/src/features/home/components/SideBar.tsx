import { UserButton } from "@clerk/clerk-react"
import { CreateClass } from "../../classes/components/CreateClass"
import ClassesList from "../../classes/components/ClassesList"

const Sidebar = () => {
    return (
        <div className='h-full w-full  max-w-[300px] break-words border borde-black flex flex-col shadow-2xl gap-2 items-center pt-4'>
            <CreateClass />
            <span className="border-b border-slate-400">My Classes</span>
            <ClassesList />
            <div className="mt-auto p-4 flex justify-center items-center">
                <UserButton afterSignOutUrl='/login' />
            </div>
        </div>
    )
}

export default Sidebar