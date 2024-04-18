import { useParams } from 'react-router-dom';

import { useGetClass } from '../api/queries';
import ContentLoading from '@/components/ContentLoading';

const GetClass = () => {
    const { classId } = useParams();
    const { data, isLoading } = useGetClass({ classId: classId || '' });
    if (!data || isLoading) return <ContentLoading />

    return (
        <span> {data.className}</span>
    )
}

export default GetClass