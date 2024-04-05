import { TrashIcon } from '@heroicons/react/outline';

import { Button } from '../../../components/Elements/Button';
import { ConfirmationDialog } from '../../../components/Elements/ConfirmationDialog';

import { useDeleteClass } from '../api/deleteClass';

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
                    <Button variant="danger" startIcon={<TrashIcon className="h-4 w-4" />}>
                        Delete Class
                    </Button>
                }
                confirmButton={
                    <Button
                        isLoading={deleteClassMutation.isLoading}
                        type="button"
                        className="bg-red-600"
                        onClick={async () => await deleteClassMutation.mutateAsync({ classId: id })}
                    >
                        Delete Class
                    </Button>
                }
            />

    );
};
