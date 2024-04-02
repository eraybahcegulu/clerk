import { useRoutes } from 'react-router-dom';
import { authRoutes } from './public';
import { protectedRoutes } from './protected';
import { useUser } from '@clerk/clerk-react';
import { commonRoutes } from './common';
import UserLoading from '../components/UserLoading';

export const AppRoutes = () => {
    const { isSignedIn , isLoaded} = useUser();

    const routes = isSignedIn ? protectedRoutes : authRoutes;
    const element = useRoutes([...routes, ...commonRoutes]);

    if (!isLoaded) return <UserLoading/>

    return <> {element} </>;
};