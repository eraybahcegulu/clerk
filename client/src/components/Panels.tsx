

import { useGetClasses } from "@/features/class/api/queries";
import Error from "./Error";
import LoadingSpinner from "./LoadingSpinner";
import { useGetStudents } from "@/features/student/api/queries";

const Panels = () => {

    const { data: classes, isLoading: isLoadingClasses } = useGetClasses();
    const { data: students, isLoading: isLoadingStudents } = useGetStudents();
    if (isLoadingClasses || isLoadingStudents) return <LoadingSpinner size="lg" />

    if (!classes) return <Error />

    return (
        <div className='h-full w-full flex flex-col md:flex-row gap-5'>
            <div className='h-[50px] p-20 bg-blue-500 rounded-3xl flex flex-col justify-center text-2xl text-center'>
                <span>TOTAL CLASS</span>
                <span>{classes?.data.length}</span>
            </div>
            <div className='h-[50px] p-20 bg-blue-500 rounded-3xl flex flex-col justify-center text-2xl text-center'>
                <span>TOTAL STUDENT</span>
                <span>{students?.data.length}</span>
            </div>

        </div>


    )
}

export default Panels