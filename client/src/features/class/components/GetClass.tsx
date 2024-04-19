import { useParams } from 'react-router-dom';

import { useGetClass } from '../api/queries';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';

const GetClass = () => {
    const { classId } = useParams();
    const { data, isLoading } = useGetClass({ classId: classId || '' });

    if(isLoading) return <LoadingSpinner/>
    if (!data) return <Error />

    return (
        <span> {data.data.className}</span>
    )
}

export default GetClass