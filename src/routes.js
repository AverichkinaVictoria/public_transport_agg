import {
    AUTH_ROUTE,
    MANAGER_MAIN_FEEDBACK_ROUTE,
    MANAGER_MAIN_PROFILE_ROUTE,
    MANAGER_MAIN_ROUTE,
    MANAGER_MAIN_ROUTES_ROUTE,
    MANAGER_MAIN_ROUTE_EDIT_ROUTE,
    MANAGER_MAIN_SUPPORT_ROUTE,
    MANAGER_MAIN_TC_ROUTE,
    MANAGER_MAIN_VEHICLES_ROUTE, MANAGER_MAIN_VEHICLE_EDIT_ROUTE, MODERATOR_MAIN_FEEDBACK_ROUTE,
    MODERATOR_MAIN_MANAGERS_ROUTE, MODERATOR_MAIN_PROFILE_ROUTE,
    MODERATOR_MAIN_ROUTE, MODERATOR_MAIN_SUPPORT_ROUTE,
    MODERATOR_MAIN_TC_ROUTE,
    MODERATOR_MAIN_USERS_ROUTE,
    PASSWORD_RESET_CHANGE_ROUTE,
    PASSWORD_RESET_ROUTE,
    REGISTER_ROUTE, VALIDATION_PAGE, VALIDATION_PASSWORD_RESET
} from "./utils/consts";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetChange from "./pages/PasswordResetChange";
import ManagerMain from "./pages/manager/ManagerMain";
import ManagerMainVehicles from "./pages/manager/ManagerMainVehicles";
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
import ManagerMainRouteEdit from "./pages/manager/ManagerMainRouteEdit";
import ManagerMainVehicleEdit from "./pages/manager/ManagerMainVehicleEdit";
import ValidationReg from "./pages/moderator/Validation_reg";
import PasswordResetValidation from "./pages/moderator/PasswordResetValidation";

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
        Component: ManagerMainVehicles
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
    {
        path: MANAGER_MAIN_ROUTE_EDIT_ROUTE,
        Component: ManagerMainRouteEdit
    },
    {
        path: MANAGER_MAIN_VEHICLE_EDIT_ROUTE,
        Component: ManagerMainVehicleEdit
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
    },
    {
        path: VALIDATION_PAGE,
        Component: ValidationReg
    },
    {
        path: VALIDATION_PASSWORD_RESET,
        Component: PasswordResetValidation
    }



//перенести в authroutes




    //перенести в authroutes


]