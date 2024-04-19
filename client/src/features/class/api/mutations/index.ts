import { useMutation, useQueryClient } from "react-query";

import toast from "react-hot-toast";
import { createClassService, deleteClassService } from "../services";
import { ICreateClassMutationOptions, IDeleteClassMutationOptions } from "../options/mutationOptions";

export const useCreateClass = ({ config }: ICreateClassMutationOptions = {}) => {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: async (res: any) => {
            await queryClient.invalidateQueries('classes');
            toast.success(res.data.message);
        },
        ...config,
        mutationFn: createClassService,
    });
};

export const useDeleteClass = ({ config }: IDeleteClassMutationOptions = {}) => {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: async (res: any) => {
            await queryClient.invalidateQueries('classes');
            toast.success(res.data.message);
        },
        ...config,
        mutationFn: deleteClassService,
    });
};