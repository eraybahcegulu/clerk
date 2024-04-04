import NotFoundPage from "../features/misc/NotFoundPage";

export const commonRoutes = [
    {
        path: '/*',
        element: <NotFoundPage />,
    },
];