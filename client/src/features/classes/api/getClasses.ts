import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { IClass } from '../types';

export const getClass = (): Promise<IClass[]> => {
    return axios.get(`/class`);
};

type QueryFnType = typeof getClass;

type UseUsersOptions = {
    config?: QueryConfig<QueryFnType>;
};

export const useClasses = ({ config }: UseUsersOptions = {}) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['class'],
        queryFn: () => getClass(),
    });
};
