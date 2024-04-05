import { useClass } from '../api/getClass';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../../components/Elements/Spinner';

const GetClass = () => {
    const { classId } = useParams();
    const { data, isLoading } = useClass({ classId: classId || '' });
    if (!data || isLoading) return <Spinner />

    return (
        <span> {data.className}</span>
    )
}

export default GetClass