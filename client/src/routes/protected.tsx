import ClassPage from "../features/classes/ClassPage";
import HomePage from "../features/home/HomePage";

export const protectedRoutes = [
    {
        path: '/home',
        element: <HomePage />,
    },
    {
        path: '/home/class/:classId',
        element: <ClassPage />,
    },
];