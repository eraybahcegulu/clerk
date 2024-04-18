import CustomButton from "../../../components/CustomButton";

import { Formik, Field, Form, ErrorMessage, } from "formik";
import { Input } from '@nextui-org/react';
import { createClassValidator } from "../validations";
import { useCreateClass } from "../api/mutations";


export const CreateClass = () => {
    const createClassMutation = useCreateClass();

    return (

        <Formik
            initialValues={{ className: "" }}
            validationSchema={createClassValidator}
            onSubmit={async (values) => {
                await createClassMutation.mutateAsync({
                    data: {
                        className: values.className,
                    }
                });
            }}
        >
            <Form>
                <div className="flex flex-col gap-4 w-[300px]">
                    <div className="flex flex-col gap-2">
                        <div>
                            <Field name="className" as={Input} maxLength={20} variant='bordered' label="className" />
                            <ErrorMessage name="className" component="div" className="text-red-500 text-xs" />
                        </div>
                    </div>
                    <CustomButton
                        type="submit"
                        size="sm"
                        isLoading={createClassMutation.isLoading}
                    >
                        Create
                    </CustomButton>
                </div>
            </Form>
        </Formik>
    );
};
