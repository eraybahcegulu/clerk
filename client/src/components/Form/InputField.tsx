import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Input } from '@nextui-org/react';

type InputFieldProps = FieldWrapperPassThroughProps & {
    type?: 'text' | 'email' | 'password';
    variant?: 'flat' | 'bordered' | 'underlined' | 'faded';
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
    const { type , variant, label, registration, error } = props;
    return (
        <FieldWrapper error={error}>
            <Input
            variant={variant}
            label={label}
                type={type}
                {...registration}
            />
        </FieldWrapper>
    );
};
