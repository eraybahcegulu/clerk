import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';

import toast from 'react-hot-toast';
import { ICreateClass } from '../types';

export const createClass = ({ data }: ICreateClass) => {
    return axios.post(`/class`, data);
};

type UseCreateClassOptions = {
    config?: MutationConfig<typeof createClass>;
};

export const useCreateClass = ({ config }: UseCreateClassOptions = {}) => {
    return useMutation({
        onSuccess: async (res: any) => {
            await queryClient.invalidateQueries('class');
            toast.success(res.message);
        },
        ...config,
        mutationFn: createClass,
    });
};
