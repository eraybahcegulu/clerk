

import { Button } from '../../../components/Elements/Button';
import { Form, FormDrawer, InputField } from '../../../components/Form';

import { useCreateClass } from '../api/createClass';
import { ICreateClass } from '../types';
import CustomButton from '../../../components/CustomButton';
import { createClassValidation } from '../validations';

export const CreateClass = () => {
    const createClassMutation = useCreateClass();

    return (
        <FormDrawer
            isDone={createClassMutation.isSuccess}
            triggerButton={
                <CustomButton children='Create Class' color='primary' variants='shadow' />
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
            <Form<ICreateClass['data'], typeof createClassValidation>
                id="create-class"
                onSubmit={async (values) => {
                    await createClassMutation.mutateAsync({ data: values });
                }}
                validation={createClassValidation}
            >
                {({ register, formState }) => (
                    <>
                        <InputField
                            variant='bordered'
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
