import Login from "../features/auth/routes/Login";
import Register from "../features/auth/routes/Register";

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