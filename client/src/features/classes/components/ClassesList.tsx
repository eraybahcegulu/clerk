import { useNavigate } from 'react-router-dom';
import { useClasses } from '../api/getClasses';
import { IGetClasses } from '../types';
import { DeleteClass } from './DeleteClass';
import ContentLoading from '../../../components/ContentLoading';

const ClassesList = () => {
    const navigate = useNavigate()
    const { data: classes, isLoading } = useClasses();
    if (!classes || isLoading) return <ContentLoading/>

    return (
        <div className='h-full w-full flex flex-col md:flex-row overflow-auto  gap-2 text-white'>
            {
                classes.map((item: IGetClasses) => (
                    <div key={item._id} className='h-fit bg-slate-600 break-words flex items-center flex-col p-4 rounded-xl gap-2' >
                        <span className='bg-white text-black p-2 rounded-lg hover:bg-slate-200 cursor-pointer' onClick={() => navigate(`/class/${item._id}`)}>
                            {item.className}
                        </span>
                        <DeleteClass id={item._id} />
                    </div>
                ))
            }
        </div>
    )
}

export default ClassesList