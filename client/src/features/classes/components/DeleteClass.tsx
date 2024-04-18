
import { ConfirmationDialog } from '../../../components/Elements/ConfirmationDialog';

import { useDeleteClass } from '../api/deleteClass';
import CustomButton from '../../../components/CustomButton';

type DeleteClassProps = {
    id: string;
};

export const DeleteClass = ({ id }: DeleteClassProps) => {
    const deleteClassMutation = useDeleteClass();

    return (

        <ConfirmationDialog
            icon="danger"
            title="Delete Class"
            body="Are you sure you want to delete this Class?"
            triggerButton={
                <CustomButton children='Delete' color='danger' variants='faded' />
            }
            confirmButton={
                <CustomButton
                    children='Delete'
                    color='danger'
                    variants='shadow'
                    isLoading={deleteClassMutation.isLoading}
                    onClick={async () => await deleteClassMutation.mutateAsync({ classId: id })}
                />
            }
        />

    );
};
