import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';

import { ICreateClass } from '../types';
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
        onError: (_, __, context: any) => {
            if (context?.previousClasses) {
                queryClient.setQueryData('class', context.previousClasses);
            }
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries('class');
            addNotification({
                type: 'success',
                title: 'Class Created',
            });
        },
        ...config,
        mutationFn: createClass,
    });
};
