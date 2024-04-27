import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import LoadingSpinner from './LoadingSpinner';


interface ICustomButtonProps {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    isLoading?: boolean;
    children: React.ReactNode;
    radius?: 'full' | 'lg' | 'md' | 'sm' | 'none';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    variants?: 'solid' | 'faded' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow';
    size?: 'sm' | 'md' | 'lg';
    type?: 'submit' | 'reset' | 'button';
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    className?: string;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
    isLoading,
    radius,
    color,
    variants,
    size,
    type,
    startContent,
    endContent,
    children,
    className,
    ...rest }) => {

    return (
        <Button
            className={clsx('', className)}
            radius={radius}
            color={color}
            variant={variants}
            size={size}
            type={type}
            startContent={startContent}
            endContent={endContent}
            isDisabled={isLoading}
            {...rest}
        >
            {
                isLoading ?
                    <LoadingSpinner size='sm' />
                    : children
            }
        </Button>
    );
};

export default CustomButton;