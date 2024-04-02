import NotFound from "../features/misc/routes/NotFound";

export const commonRoutes = [
    {
        path: '/*',
        element: <NotFound />,
    },
];