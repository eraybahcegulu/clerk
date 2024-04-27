import { useParams } from 'react-router-dom';

import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useGetStudent } from '../api/queries';
import { StudentClassesList } from './StudentClassesList';

const GetStudent = () => {
    const { studentId } = useParams();
    const { data, isLoading } = useGetStudent({ studentId: studentId || '' });

    if(isLoading) return <LoadingSpinner size='lg'/>
    if (!data) return <Error />

    return (
        <>
        <span> {data.data?.name}</span>
        <StudentClassesList studentId={studentId || ''} />
        </>
    )
}

export default GetStudent