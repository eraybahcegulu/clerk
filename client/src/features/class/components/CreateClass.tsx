import { useCreateClass } from "../api/mutations";

import CustomForm from "@/components/CustomForm";
import { createClassValidator } from "../validators";
import { createClassFields } from "../formFields";

export const CreateClass = () => {
    const createClassMutation = useCreateClass();

    return (
        <>

            <CustomForm
                initialValues={{ className: "" }}
                mutation={createClassMutation}
                validationSchema={createClassValidator}
                fields={createClassFields}
            />
        </>
    );
};
