import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';


import { useNotificationStore } from '../../../stores/notifications';
import { IClass } from '../types';

export const deleteClass = ({ classId }: { classId: string }) => {
    return axios.delete(`/class/${classId}`);
};

type UseDeleteClassOptions = {
    config?: MutationConfig<typeof deleteClass>;
};

export const useDeleteClass = ({ config }: UseDeleteClassOptions = {}) => {
    const { addNotification } = useNotificationStore();

    return useMutation({
        onMutate: async (deleteClass) => {
            await queryClient.cancelQueries('classes');

            const previousClasses = queryClient.getQueryData<IClass[]>('classes');

            queryClient.setQueryData(
                'classes',
                previousClasses?.filter(
                    (x) => x._id !== deleteClass.classId
                )
            );

            return { previousClasses };
        },
        onError: (_, __, context: any) => {
            if (context?.previousClasses) {
                queryClient.setQueryData('classes', context.previousClasses);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('classes');
            addNotification({
                type: 'success',
                title: 'Class Deleted',
            });
        },
        ...config,
        mutationFn: deleteClass,
    });
};
