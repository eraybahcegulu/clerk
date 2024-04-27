
import { axios } from "@/lib/axios";
import { ICreateStudent, IGetStudent } from "../../types";

export const getStudentsService = () => {
    return axios.get(`/student`);
};

export const getStudentService = ({ studentId }: { studentId: string }): Promise<IGetStudent> => {
    return axios.get(`/student/${studentId}`);
};
export const createStudentService = ({ data }: ICreateStudent) => {
    return axios.post(`/student`, data);
};

export const deleteStudentService = ({ studentId }: { studentId: string }) => {
    return axios.delete(`/student/${studentId}`);
};

export const getStudentClassesService = ({ studentId}: { studentId: string }) => {
    return axios.get(`/student/classes/${studentId}`);
};

export const addStudentToClassService = ({ studentId, classId }: { studentId: string, classId: string }) => {
    return axios.post(`/student/${studentId}/${classId},`);
};
