import ClassPage from "@/pages/protectedPages/ClassPage";
import ClassesPage from "@/pages/protectedPages/ClassesPage";
import HomePage from "@/pages/protectedPages/HomePage";
import SchedulePage from "@/pages/protectedPages/SchedulePage";
import StudentPage from "@/pages/protectedPages/StudentPage";
import StudentsPage from "@/pages/protectedPages/StudentsPage";

export const protectedRoutes = [
    {
        path: '/home',
        element: <HomePage />,
    },
    {
        path: '/classes',
        element: <ClassesPage />,
    },
    {
        path: '/class/:classId',
        element: <ClassPage />,
    },
    {
        path: '/students',
        element: <StudentsPage />,
    },
    {
        path: '/student/:studentId',
        element: <StudentPage />,
    },
    {
        path: '/schedule',
        element: <SchedulePage />,
    },
];