import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { IClass } from '../types';

export const getClass = ({ classId }: { classId: string }): Promise<IClass> => {
    return axios.get(`/class/${classId}`);
};

type QueryFnType = typeof getClass;

type IGetClassOptions = {
    classId: string;
    config?: QueryConfig<QueryFnType>;
};

export const useClass = ({ classId, config }: IGetClassOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['class', classId],
        queryFn: () => getClass({ classId }),
    });
};
