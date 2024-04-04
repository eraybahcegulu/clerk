import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { IGetClass } from '../types';

export const getClass = ({ classId }: { classId: string }): Promise<IGetClass> => {
    return axios.get(`/class/${classId}`);
};

type QueryFnType = typeof getClass;

type UseClassOptions = {
    classId: string;
    config?: QueryConfig<QueryFnType>;
};

export const useClass = ({ classId, config }: UseClassOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['class', classId],
        queryFn: () => getClass({ classId }),
    });
};
