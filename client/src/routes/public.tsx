import Login from "../features/auth/LoginPage";
import Register from "../features/auth/RegisterPage";

export const authRoutes = [
    {
        path: '/login',
        element: <Login />,
    },

    {
        path: '/register',
        element: <Register />,
    },
];