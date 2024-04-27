import { Spinner } from "@nextui-org/react";

interface ILoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({size}) => {
    return (
        <Spinner color="default" size={size} />
    )
}

export default LoadingSpinner