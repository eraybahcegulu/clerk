
import { QueryConfig } from "@/lib/react-query";
import { getClassService, getClassesService } from "../services";


export type GetClassQuery = typeof getClassService;
export type GetClassesQuery = typeof getClassesService;

export type IGetClassQueryOptions = {
    classId: string;
    config?: QueryConfig<GetClassQuery>;
};

export type IGetClassesQueryOptions = {
    config?: QueryConfig<GetClassesQuery>;
};
