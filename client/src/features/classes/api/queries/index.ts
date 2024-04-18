import { useQuery } from "react-query";
import { ExtractFnReturnType } from "../../../../lib/react-query";

import { getClassService, getClassesService } from "../services";
import { GetClassQuery, GetClassesQuery, IGetClassQueryOptions, IGetClassesQueryOptions } from "../options/queryOptions";

export const useClass = ({ classId, config }: IGetClassQueryOptions) => {
    return useQuery<ExtractFnReturnType<GetClassQuery>>({
        ...config,
        queryKey: ['class', classId],
        queryFn: () => getClassService({ classId }),
    });
};

export const useClasses = ({ config }: IGetClassesQueryOptions = {}) => {
    return useQuery<ExtractFnReturnType<GetClassesQuery>>({
        ...config,
        queryKey: ['classes'],
        queryFn: () => getClassesService(),
    });
};