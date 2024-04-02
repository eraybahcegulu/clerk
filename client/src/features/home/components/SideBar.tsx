import { UserButton } from "@clerk/clerk-react"

const SideBar = () => {



    return (
        <div className="min-h-screen max-h-screen flex flex-col justify-between">
            <div className="ml-0 h-full overflow-auto border-r border-black min-w-[200px] flex flex-col justify-between gap-2 items-center p-4 text-black">


                <div className="w-full flex flex-col items-center justify-start">
                    
                </div>

                <div className="w-full flex  flex-col items-center justify-start ">
                
                </div>
            </div>



            <div className="mt-auto p-4 flex justify-center items-center border-r border-black">
                <UserButton afterSignOutUrl='/login' />
            </div>

        </div>

    )
}

export default SideBar