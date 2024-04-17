import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import toast from 'react-hot-toast';

export const deleteClass = ({ classId }: { classId: string }) => {
    return axios.delete(`/class/${classId}`);
};

type IDeleteClassOptions = {
    config?: MutationConfig<typeof deleteClass>;
};

export const useDeleteClass = ({ config }: IDeleteClassOptions = {}) => {
    return useMutation({
        onSuccess: async (res: any) => {
            await queryClient.invalidateQueries('class');
            toast.success(res.message);
        },
        ...config,
        mutationFn: deleteClass,
    });
};
