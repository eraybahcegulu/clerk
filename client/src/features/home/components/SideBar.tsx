import { UserButton } from "@clerk/clerk-react"
import { CreateClass } from "../../classes/components/CreateClass"
import ClassesList from "../../classes/components/ClassesList"
import { Button } from "../../../components/Elements/Button"
import { useNavigate } from "react-router-dom"

const SideBar = () => {
    const navigate = useNavigate()
    return (
        <div className='h-full w-full max-w-[200px] break-words flex flex-col shadow-2xl gap-2 items-center pt-4'>
            <Button onClick={() => navigate('/home')}> Home </Button>
            <CreateClass />
            <span className="border-b border-slate-400">My Classes</span>
            <ClassesList />

            <div className="mt-auto p-4 flex justify-center items-center">
                <UserButton afterSignOutUrl='/login' />
            </div>
        </div>
    )
}

export default SideBar