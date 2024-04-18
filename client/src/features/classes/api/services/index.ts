
import { axios } from "@/lib/axios";
import { IClass, ICreateClass } from "@/features/classes/types";


export const getClassesService = () => {
    return axios.get(`/class`);
};

export const getClassService = ({ classId }: { classId: string }): Promise<IClass> => {
    return axios.get(`/class/${classId}`);
};
export const createClassService = ({ data }: ICreateClass) => {
    return axios.post(`/class`, data);
};

export const deleteClassService = ({ classId }: { classId: string }) => {
    return axios.delete(`/class/${classId}`);
};

