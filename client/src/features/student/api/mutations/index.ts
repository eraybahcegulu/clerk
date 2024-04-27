import { useMutation, useQueryClient } from "react-query";

import toast from "react-hot-toast";
import { createStudentService, deleteStudentService } from "../services";
import { ICreateStudentMutationOptions, IDeleteStudentMutationOptions } from "../options/mutationOptions";

export const useCreateStudent = ({ config }: ICreateStudentMutationOptions = {}) => {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: async (res: any) => {
            await queryClient.invalidateQueries('students');
            toast.success(res.data.message);
        },
        ...config,
        mutationFn: createStudentService,
    });
};

export const useDeleteStudent = ({ config }: IDeleteStudentMutationOptions = {}) => {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: async (res: any) => {
            await queryClient.invalidateQueries('students');
            toast.success(res.data.message);
        },
        ...config,
        mutationFn: deleteStudentService,
    });
};

export const useAddStudentToClass = () => {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: async (res: any) => {
            await queryClient.resetQueries('studentClasses');
            await queryClient.invalidateQueries('students');
            await queryClient.invalidateQueries('classes');
            toast.success(res.data.message);
        },
        mutationFn: deleteStudentService,
    });
};