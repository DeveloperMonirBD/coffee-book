import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import ErrorElement from "../pages/ErrorElement";
import CoffeeCards from "../components/CoffeeCards";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <CoffeeCards />,
                        loader: () => fetch('../coffees.json')
                    },
                    {
                        path: '/category/:category',
                        element: <CoffeeCards />,
                        loader: () => fetch('../coffees.json')
                    }
                ]
            },
            {
                path: '/coffees',
                element: <Coffees />,
                loader: () => fetch('../coffees.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
]);

export default routes;
