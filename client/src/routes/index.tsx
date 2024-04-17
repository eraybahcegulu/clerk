import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import { useUser } from '@clerk/clerk-react';
import { commonRoutes } from './common';
import UserLoading from '../components/UserLoading';
import PrivateLayout from '../components/PrivateLayout';
import PublicLayout from '../components/PublicLayout';

export const AppRoutes = () => {
    const { isSignedIn, isLoaded } = useUser();

    const routes = isSignedIn ? protectedRoutes : publicRoutes;
    const element = useRoutes([...routes, ...commonRoutes]);

    if (!isLoaded) return <PublicLayout content={<UserLoading />} />

    return (
        <>
            {
                isSignedIn
                    ?
                    <PrivateLayout content={element} />
                    :
                    <PublicLayout content={element} />
            }
        </>
    );
};