import { useQuery } from "react-query";

import { ExtractFnReturnType } from "@/lib/react-query";
import {  getStudentClassesService, getStudentService, getStudentsService } from "../services";
import { GetStudentClassesQuery, GetStudentQuery, GetStudentsQuery, IGetStudentClassesQueryOptions, IGetStudentQueryOptions, IGetStudentsQueryOptions } from "../options/queryOptions";

export const useGetStudent = ({ studentId, config }: IGetStudentQueryOptions) => {
    return useQuery<ExtractFnReturnType<GetStudentQuery>>({
        ...config,
        queryKey: ['student', studentId],
        queryFn: () => getStudentService({ studentId }),
    });
};

export const useGetStudents = ({ config }: IGetStudentsQueryOptions = {}) => {
    return useQuery<ExtractFnReturnType<GetStudentsQuery>>({
        ...config,
        queryKey: ['students'],
        queryFn: () => getStudentsService(),
    });
};

export const useGetStudentClasses = ({ studentId, config }: IGetStudentClassesQueryOptions) => {
    return useQuery<ExtractFnReturnType<GetStudentClassesQuery>>({
        ...config,
        queryKey: ['studentClasses', studentId],
        queryFn: () => getStudentClassesService({studentId}),
    });
};