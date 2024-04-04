import { useClasses } from '../../classes/api/getClasses';
import { Spinner } from '../../../components/Elements/Spinner';

const Panels = () => {
    const { data: classes, isLoading } = useClasses();
    if (!classes || isLoading) return <Spinner />
    return (
        <>
            <div className='h-[50px] p-20 bg-blue-500 rounded-3xl flex flex-col justify-center text-2xl text-center'>
                <span>TOTAL CLASS</span>
                <span>{classes?.length}</span>
            </div>
            <div className='h-[50px] p-20 bg-blue-500 rounded-3xl flex flex-col justify-center text-2xl text-center'>
                <span>TOTAL STUDENT</span>
                <span> 0 </span>
            </div>
            
        </>


    )
}

export default Panels