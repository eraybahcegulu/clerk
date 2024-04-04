import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { IGetClasses } from '../types';

export const getClasses = (): Promise<IGetClasses[]> => {
    return axios.get(`/class`);
};

type QueryFnType = typeof getClasses;

type UseClassesOptions = {
    config?: QueryConfig<QueryFnType>;
};

export const useClasses = ({ config }: UseClassesOptions = {}) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['classes'],
        queryFn: () => getClasses(),
    });
};
