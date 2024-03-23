import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

export const routes = [
    {
        path: '*',
        element: <NotFound />
    },
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
];