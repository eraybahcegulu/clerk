import CustomForm from "@/components/CustomForm";
import { useCreateStudent } from "../api/mutations";
import { createStudentValidator } from "../validators";
import { createStudentFields } from "../formFields";

export const CreateStudent = () => {
    const createStudentMutation = useCreateStudent();

    return (
        <>
            <CustomForm
                initialValues={{ name: "", surname: "", no: "" }}
                mutation={createStudentMutation}
                validationSchema={createStudentValidator}
                fields={createStudentFields}
            />
        </>
    );
};
