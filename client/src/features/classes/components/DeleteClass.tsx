import CustomButton from '../../../components/CustomButton';
import { useDeleteClass } from '../api/mutations';
import { IDeleteClass } from '../types';

export const DeleteClass = ({ classId }: IDeleteClass) => {
    const deleteClassMutation = useDeleteClass();

    return (
        <CustomButton
            children='Delete'
            color='danger'
            variants='shadow'
            isLoading={deleteClassMutation.isLoading}
            onClick={async () => await deleteClassMutation.mutateAsync({ classId: classId })}
        />
    );
};
