import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { IClass } from '../types';

export const getClasses = (): Promise<IClass[]> => {
    return axios.get(`/class`);
};

type QueryFnType = typeof getClasses;

type IGetClassesOptions = {
    config?: QueryConfig<QueryFnType>;
};

export const useClasses = ({ config }: IGetClassesOptions = {}) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['class'],
        queryFn: () => getClasses(),
    });
};
