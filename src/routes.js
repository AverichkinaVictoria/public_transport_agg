import {
    AUTH_ROUTE,
    MANAGER_MAIN_FEEDBACK_ROUTE,
    MANAGER_MAIN_PROFILE_ROUTE,
    MANAGER_MAIN_ROUTE,
    MANAGER_MAIN_ROUTES_ROUTE,
    MANAGER_MAIN_SUPPORT_ROUTE,
    MANAGER_MAIN_TC_ROUTE,
    MANAGER_MAIN_VEHICLES_ROUTE,
    PASSWORD_RESET_CHANGE_ROUTE,
    PASSWORD_RESET_ROUTE,
    REGISTER_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetChange from "./pages/PasswordResetChange";
import ManagerMain from "./pages/ManagerMain";
import Manager_main_vehicles from "./pages/Manager_main_vehicles";
import ManagerMainFeedback from "./pages/ManagerMainFeedback";
import ManagerMainProfile from "./pages/ManagerMainProfile";
import ManagerMainRoutes from "./pages/ManagerMainRoutes";
import ManagerMainSupport from "./pages/ManagerMainSupport";
import ManagerMainTC from "./pages/ManagerMainTC";

export const authRoutes = [

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
    },




    {
        path: MANAGER_MAIN_VEHICLES_ROUTE,
        Component: Manager_main_vehicles
    },
    {
        path: MANAGER_MAIN_ROUTE,
        Component: ManagerMain
    },
    {
        path: MANAGER_MAIN_FEEDBACK_ROUTE,
        Component: ManagerMainFeedback
    },
    {
        path: MANAGER_MAIN_PROFILE_ROUTE,
        Component: ManagerMainProfile
    },
    {
        path: MANAGER_MAIN_ROUTES_ROUTE,
        Component: ManagerMainRoutes
    },
    {
        path: MANAGER_MAIN_SUPPORT_ROUTE,
        Component: ManagerMainSupport
    },
    {
        path: MANAGER_MAIN_TC_ROUTE,
        Component: ManagerMainTC
    },
]