import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';

import { ICreateClass, IGetClasses } from '../types';
import { useNotificationStore } from '../../../stores/notifications';

export type CreateClassDTO = {
    data: {
        className: string;
    };
};

export const createClass = ({ data }: CreateClassDTO): Promise<ICreateClass> => {
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

            const previousClasses = queryClient.getQueryData<IGetClasses[]>('classes');

            queryClient.setQueryData('classes', [...(previousClasses || []), newClass.data]);

            return { previousClasses };
        },
        onError: (_, __, context: any) => {
            if (context?.previousClasses) {
                queryClient.setQueryData('classes', context.previousClasses);
            }
        },
        onSuccess: async (res) => {
            console.log(res)
            await queryClient.invalidateQueries('classes');
            addNotification({
                type: 'success',
                title: 'Class Created',
            });
        },
        ...config,
        mutationFn: createClass,
    });
};
