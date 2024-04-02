import Home from "../features/home/routes/Home";

export const protectedRoutes = [
    {
        path: '/home',
        element: <Home />,
    },
];