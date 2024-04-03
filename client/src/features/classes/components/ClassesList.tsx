import { Spinner } from '../../../components/Elements/Spinner';
import { useClasses } from '../api/getClasses';
import { IGetClasses } from '../types';

const ClassesList = () => {
    const { data: classes, isLoading } = useClasses();
    if (!classes || isLoading) return <Spinner/>
    return (
        <div className="overflow-auto h-full w-full flex flex-col items-center gap-2 px-10 py-2 bg-slate-50">
            {
                classes.map((item: IGetClasses) => (
                    <div key={item._id} className='max-w-full bg-slate-300 p-2 rounded-xl hover:bg-slate-200 cursor-pointer' >
                        <span>
                            {item.className}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default ClassesList