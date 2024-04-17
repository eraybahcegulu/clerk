
import LoginPage from "../pages/publicPages/LoginPage";
import RegisterPage from "../pages/publicPages/RegisterPage";

export const publicRoutes = [
    {
        path: '/login',
        element: <LoginPage />,
    },

    {
        path: '/register',
        element: <RegisterPage />,
    },
];