import { lazy } from "react";
import { Navigate } from "react-router-dom";
import LazyComponent from "../components/LazyComponent";
import { protectedLoader, manageLoader } from "../router/loader";

const routes = [
    {
        path: "/login",
        element: <LazyComponent lazyChildren={lazy(() => import("../pages/Login"))} />
    },
    {
        path: "/",
        loader: protectedLoader,
        element: <LazyComponent lazyChildren={lazy(() => import("../Layout"))} />,
        children: [
            {
                index: true,
                element: <Navigate to={"/home"} replace={true} />
            },
            {
                path: "/home",
                element: <LazyComponent lazyChildren={lazy(() => import("../pages/Home"))} />
            },
            {
                path: "/declare",
                element: <LazyComponent lazyChildren={lazy(() => import("../pages/Declare"))} />
            },
            {
                path: "/manage",
                loader: manageLoader,
                element: <LazyComponent lazyChildren={lazy(() => import("../pages/Manage"))} />
            },
            {
                path: "/nopermission",
                element: <LazyComponent lazyChildren={lazy(() => import("../pages/NoPermission"))} />
            },
        ]
    }
];

export default routes;