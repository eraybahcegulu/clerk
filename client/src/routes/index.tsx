import { useUser } from "@clerk/clerk-react";
import { commonRoutes } from "./common";
import { publicRoutes } from "./public";
import { useRoutes } from "react-router-dom";
import PublicLayout from "@/components/PublicLayout";
import UserLoading from "@/components/UserLoading";
import PrivateLayout from "@/components/PrivateLayout";
import { protectedRoutes } from "./protected";

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