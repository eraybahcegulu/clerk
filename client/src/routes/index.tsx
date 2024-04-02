import { useRoutes } from 'react-router-dom';
import { authRoutes } from './public';
import { protectedRoutes } from './protected';
import { useUser } from '@clerk/clerk-react';
import { commonRoutes } from './common';
import Loading from '../features/misc/routes/Loading';

export const AppRoutes = () => {
    const user = useUser();

    const routes = user?.isSignedIn ? protectedRoutes : authRoutes;
    const element = useRoutes([...routes, ...commonRoutes]);

    if (!user.isLoaded) return <Loading/>

    return <> {element} </>;
};