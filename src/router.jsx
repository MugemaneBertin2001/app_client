import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Signup from "./views/Signup";
import Users from "./views/users";
import PageNotFound from "./views/PageNotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./components/Dashboard";


const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout />,
        children:[
            {
                path:'/',
                element: <Navigate to="/users" />
            },
            {
                path:'/dashboard',
                element:<Dashboard />
            },
            {
                path:'/users',
                element:<Users />
            }
        ]
    },
    {
        path:'/',
        element:<GuestLayout />,
        children:[
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<Signup />
            }
        ]
    },
    {
        path:'*',
        element:<PageNotFound />

    }


]);

export default router