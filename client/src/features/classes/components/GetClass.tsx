import { useParams } from 'react-router-dom';
import ContentLoading from '../../../components/ContentLoading';
import { useClass } from '../api/queries';

const GetClass = () => {
    const { classId } = useParams();
    const { data, isLoading } = useClass({ classId: classId || '' });
    if (!data || isLoading) return <ContentLoading />

    return (
        <span> {data.className}</span>
    )
}

export default GetClass