import {
    AUTH_ROUTE,
    MANAGER_MAIN_ROUTE,
    PASSWORD_RESET_CHANGE_ROUTE,
    PASSWORD_RESET_ROUTE,
    REGISTER_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetChange from "./pages/PasswordResetChange";
import ManagerMain from "./pages/ManagerMain";

export const authRoutes = [
    {
        path: MANAGER_MAIN_ROUTE,
        Component: ManagerMain
    }
]

export const publicRoutes = [
    {
        path: REGISTER_ROUTE,
        Component: Registration
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: PASSWORD_RESET_ROUTE,
        Component: PasswordReset
    },
    {
        path: PASSWORD_RESET_CHANGE_ROUTE,
        Component: PasswordResetChange
    }

]