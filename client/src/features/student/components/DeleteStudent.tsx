import CustomButton from "@/components/CustomButton";
import { useDeleteStudent } from "../api/mutations";
import { IDeleteStudent } from "../types";

export const DeleteStudent = ({ studentId }: IDeleteStudent) => {
    const deleteStudentMutation = useDeleteStudent();

    return (
        <CustomButton
            children='Delete'
            color='danger'
            variants='shadow'
            isLoading={deleteStudentMutation.isLoading}
            onClick={() =>  deleteStudentMutation.mutateAsync({ studentId: studentId })}
        />
    );
};
