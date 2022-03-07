import {
    AUTH_ROUTE,
    MANAGER_MAIN_FEEDBACK_ROUTE,
    MANAGER_MAIN_PROFILE_ROUTE,
    MANAGER_MAIN_ROUTE,
    MANAGER_MAIN_ROUTES_ROUTE,
    MANAGER_MAIN_SUPPORT_ROUTE,
    MANAGER_MAIN_TC_ROUTE,
    MANAGER_MAIN_VEHICLES_ROUTE, MODERATOR_MAIN_FEEDBACK_ROUTE,
    MODERATOR_MAIN_MANAGERS_ROUTE, MODERATOR_MAIN_PROFILE_ROUTE,
    MODERATOR_MAIN_ROUTE, MODERATOR_MAIN_SUPPORT_ROUTE,
    MODERATOR_MAIN_TC_ROUTE,
    MODERATOR_MAIN_USERS_ROUTE,
    PASSWORD_RESET_CHANGE_ROUTE,
    PASSWORD_RESET_ROUTE,
    REGISTER_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetChange from "./pages/PasswordResetChange";
import ManagerMain from "./pages/manager/ManagerMain";
import Manager_main_vehicles from "./pages/manager/Manager_main_vehicles";
import ManagerMainFeedback from "./pages/manager/ManagerMainFeedback";
import ManagerMainProfile from "./pages/manager/ManagerMainProfile";
import ManagerMainRoutes from "./pages/manager/ManagerMainRoutes";
import ManagerMainSupport from "./pages/manager/ManagerMainSupport";
import ManagerMainTC from "./pages/manager/ManagerMainTC";
import ModeratorMain from "./pages/moderator/ModeratorMain";
import ModeratorTC from "./pages/moderator/ModeratorTC";
import ModeratorManagers from "./pages/moderator/ModeratorManagers";
import ModeratorUsers from "./pages/moderator/ModeratorUsers";
import ModeratorFeedbacks from "./pages/moderator/ModeratorFeedbacks";
import ModeratorProfile from "./pages/moderator/ModeratorProfile";
import ModeratorSupportService from "./pages/moderator/ModeratorSupportService";

export const authRoutesModerator = [
    {
        path: MODERATOR_MAIN_ROUTE,
        Component: ModeratorMain
    },
    {
        path: MODERATOR_MAIN_TC_ROUTE,
        Component: ModeratorTC
    },
    {
        path: MODERATOR_MAIN_MANAGERS_ROUTE,
        Component: ModeratorManagers
    },
    {
        path: MODERATOR_MAIN_USERS_ROUTE,
        Component: ModeratorUsers
    },
    {
        path: MODERATOR_MAIN_FEEDBACK_ROUTE,
        Component: ModeratorFeedbacks
    },
    {
        path: MODERATOR_MAIN_PROFILE_ROUTE,
        Component: ModeratorProfile
    },
    {
        path: MODERATOR_MAIN_SUPPORT_ROUTE,
        Component: ModeratorSupportService
    }

]

export const authRoutesManager = [
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



//перенести в authroutes




    //перенести в authroutes


]