import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';

import { IClass } from '../types';
import { useNotificationStore } from '../../../stores/notifications';

export type CreateClassDTO = {
    data: {
        className: string;
    };
};

export const createClass = ({ data }: CreateClassDTO): Promise<IClass> => {
    return axios.post(`/class`, data);
};

type UseCreateClassOptions = {
    config?: MutationConfig<typeof createClass>;
};

export const useCreateClass = ({ config }: UseCreateClassOptions = {}) => {
    const { addNotification } = useNotificationStore();
    return useMutation({
        onMutate: async (newClass) => {
            await queryClient.cancelQueries('classes');

            const previousClasses = queryClient.getQueryData<IClass[]>('classes');

            queryClient.setQueryData('classes', [...(previousClasses || []), newClass.data]);

            return { previousClasses };
        },
        onError: (_, __, context: any) => {
            if (context?.previousClasses) {
                queryClient.setQueryData('classes', context.previousClasses);
            }
        },
        onSuccess: (res) => {
            console.log(res)
            queryClient.invalidateQueries('classes');
            addNotification({
                type: 'success',
                title: 'Discussion Created',
            });
        },
        ...config,
        mutationFn: createClass,
    });
};
