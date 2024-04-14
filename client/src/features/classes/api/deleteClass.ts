import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';


import { useNotificationStore } from '../../../stores/notifications';


export const deleteClass = ({ classId }: { classId: string }) => {
    return axios.delete(`/class/${classId}`);
};

type UseDeleteClassOptions = {
    config?: MutationConfig<typeof deleteClass>;
};

export const useDeleteClass = ({ config }: UseDeleteClassOptions = {}) => {
    const { addNotification } = useNotificationStore();

    return useMutation({
        onError: (_, __, context: any) => {
            if (context?.previousClasses) {
                queryClient.setQueryData('class', context.previousClasses);
            }
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries('class');
            addNotification({
                type: 'success',
                title: 'Class Deleted',
            });
        },
        ...config,
        mutationFn: deleteClass,
    });
};
