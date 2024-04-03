import { UserButton } from "@clerk/clerk-react"
import { CreateClass } from "../../classes/components/CreateClass"
const SideBar = () => {
    return (
        <div className="min-h-screen max-h-screen max-w-[200px] flex flex-col justify-between">
            <div className="ml-0 h-full  border-r shadow-2xl min-w-[200px] flex flex-col justify-between gap-2 items-center p-4 text-black">


                <div className="w-full flex flex-col gap-2">
                   
                    <div className="flex flex-col items-center overflow-ellipsis break-words">
                        <CreateClass/>
                        <div className="max-w-full text-wrap flex flex-col gap-2">

                        </div>
                    </div>
                </div>

                <div className="w-full flex  flex-col items-center justify-start ">

                </div>
            </div>



            <div className="flex p-2 justify-center text-center items-center shadow-md">
                <UserButton afterSignOutUrl='/login' />
            </div>

        </div>

    )
}

export default SideBar