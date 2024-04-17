import { PlusIcon } from '@heroicons/react/outline';
import * as z from 'zod';

import { Button } from '../../../components/Elements/Button';
import { Form, FormDrawer, InputField } from '../../../components/Form';


import {  useCreateClass } from '../api/createClass';
import { ICreateClass } from '../types';

const schema = z.object({
    className: z.string().min(1, 'Required'),
});

export const CreateClass = () => {
    const createClassMutation = useCreateClass();

    return (
            <FormDrawer
                isDone={createClassMutation.isSuccess}
                triggerButton={
                    <Button size="sm" startIcon={<PlusIcon className="h-4 w-4" />}>
                        Create Class
                    </Button>
                }
                title="Create Class"
                submitButton={
                    <Button
                        form="create-class"
                        type="submit"
                        size="sm"
                        disabled={createClassMutation.isLoading}
                        isLoading={createClassMutation.isLoading}
                    >
                        Create
                    </Button>
                }
            >
                <Form<ICreateClass['data'], typeof schema>
                    id="create-class"
                    onSubmit={async (values) => {
                        await createClassMutation.mutateAsync({ data: values });
                    }}
                    schema={schema}
                >
                    {({ register, formState }) => (
                        <>
                            <InputField
                                label="Class Name"
                                error={formState.errors['className']}
                                registration={register('className')}
                            />
                        </>
                    )}
                </Form>
            </FormDrawer>
    );
};
