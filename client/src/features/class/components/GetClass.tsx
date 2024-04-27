import { useParams } from 'react-router-dom';

import { useGetClass } from '../api/queries';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';

const GetClass = () => {
    const { classId } = useParams();
    const { data, isLoading } = useGetClass({ classId: classId || '' });

    if(isLoading) return <LoadingSpinner size='lg'/>
    if (!data) return <Error />

    return (
        <span> {data.data.name}</span>
    )
}

export default GetClass