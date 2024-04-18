import { ErrorMessage, Field, Form, Formik } from 'formik';
import CustomButton from './CustomButton';
import { Input } from '@nextui-org/react';
import { AnySchema } from 'yup';

interface FieldConfig {
    name: string;
    label: string;
    maxLength: number;
    type: "text" | "number" | "email" | "password";
    variant: string;
}

interface Props {
    initialValues: object;
    validationSchema: AnySchema;
    mutation: any;
    fields: FieldConfig[];
}

const CustomForm: React.FC<Props> = ({ initialValues, validationSchema, mutation, fields }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
                await mutation.mutateAsync({
                    data: values,
                });
                resetForm();
            }}
        >
            <Form>
                <div className="flex flex-col gap-4 w-[300px]">
                    <div className="flex flex-col gap-2">
                        {fields.map((field) => (
                            <div key={field.name}>
                                <Field name={field.name} as={Input} maxLength={field.maxLength} variant={field.variant} label={field.label} type={field.type} />
                                <ErrorMessage name={field.name} component="div" className="text-red-500 text-xs" />
                            </div>
                        ))}
                    </div>
                    <CustomButton
                        type="submit"
                        size="sm"
                        color='primary'
                        isLoading={mutation.isLoading}
                    >
                        Create
                    </CustomButton>
                </div>
            </Form>
        </Formik>
    );
}

export default CustomForm;
