
import { QueryConfig } from "@/lib/react-query";
import { getStudentClassesService, getStudentService, getStudentsService } from "../services";

export type GetStudentQuery = typeof getStudentService;
export type GetStudentClassesQuery = typeof getStudentClassesService;
export type GetStudentsQuery = typeof getStudentsService;

export type IGetStudentQueryOptions = {
    studentId: string;
    config?: QueryConfig<GetStudentQuery>;
};

export type IGetStudentClassesQueryOptions = {
    studentId: string;
    config?: QueryConfig<GetStudentClassesQuery>;
};

export type IGetStudentsQueryOptions = {
    config?: QueryConfig<GetStudentsQuery>;
};
