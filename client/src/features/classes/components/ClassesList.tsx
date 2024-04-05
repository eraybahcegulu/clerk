import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../../components/Elements/Spinner';
import { useClasses } from '../api/getClasses';
import { IGetClasses } from '../types';
import { DeleteClass } from './DeleteClass';

const ClassesList = () => {
    const navigate = useNavigate()
    const { data: classes, isLoading } = useClasses();
    if (!classes || isLoading) return <Spinner/>
    return (
        <div className="overflow-auto h-full w-full flex flex-col shadow-2xl items-center gap-2 px-10 py-2 bg-slate-100 rounded-3xl">
            {
                classes.map((item: IGetClasses) => (
                    <div onClick={() => navigate(`/home/class/${item._id}`)} key={item._id} className='max-w-full flex flex-col bg-slate-300 p-2 rounded-xl hover:bg-slate-200 cursor-pointer' >
                        <span>
                            {item.className}
                        </span>
                        <DeleteClass id={item._id}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ClassesList