
import { useClasses } from "../features/classes/api/getClasses";
import ContentLoading from "./ContentLoading";

const Panels = () => {
    const { data: classes, isLoading } = useClasses();
    if (!classes || isLoading) return <ContentLoading />
    return (
        <div className='h-full w-full flex flex-col md:flex-row gap-5'>
            <div className='h-[50px] p-20 bg-blue-500 rounded-3xl flex flex-col justify-center text-2xl text-center'>
                <span>TOTAL CLASS</span>
                <span>{classes?.length}</span>
            </div>
            <div className='h-[50px] p-20 bg-blue-500 rounded-3xl flex flex-col justify-center text-2xl text-center'>
                <span>TOTAL STUDENT</span>
                <span> 0 </span>
            </div>

        </div>


    )
}

export default Panels