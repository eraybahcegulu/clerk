import { useQuery } from "react-query";

import { getClassService, getClassesService } from "../services";
import { GetClassQuery, GetClassesQuery, IGetClassQueryOptions, IGetClassesQueryOptions } from "../options/queryOptions";
import { ExtractFnReturnType } from "@/lib/react-query";

export const useGetClass = ({ classId, config }: IGetClassQueryOptions) => {
    return useQuery<ExtractFnReturnType<GetClassQuery>>({
        ...config,
        queryKey: ['class', classId],
        queryFn: () => getClassService({ classId }),
    });
};

export const useGetClasses = ({ config }: IGetClassesQueryOptions = {}) => {
    return useQuery<ExtractFnReturnType<GetClassesQuery>>({
        ...config,
        queryKey: ['classes'],
        queryFn: () => getClassesService(),
    });
};