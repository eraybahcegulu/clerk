import { useClasses } from '../api/getClasses';

const ClassesList = () => {
    const { data: classes, isLoading } = useClasses();
    if(!classes || isLoading) return <div> loading...</div>
    return (
        <div>
{
                classes.map((item) => (
                    <span key={item._id}> {item.className}</span>
                ))
            }

        </div>
    )
}

export default ClassesList