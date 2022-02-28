import React from 'react';
import '../../styles/styles_for_pages/ManagerMainProfile.css'
import {
    AUTH_ROUTE,
    MANAGER_MAIN_FEEDBACK_ROUTE,
    MANAGER_MAIN_PROFILE_ROUTE,
    MANAGER_MAIN_ROUTE,
    MANAGER_MAIN_ROUTES_ROUTE, MANAGER_MAIN_SUPPORT_ROUTE, MANAGER_MAIN_TC_ROUTE,
    MANAGER_MAIN_VEHICLES_ROUTE
} from "../../utils/consts";
import statictic_icon from "../../UI/statistic_icon.svg";
import vehicle_icon from "../../UI/Vehicles_icon.svg";
import routes_icon from "../../UI/routes_icon.svg";
import feedback_icon from "../../UI/feedback_icon.svg";
import trans_company_icon from "../../UI/trans_company_icon.svg";
import profile_icon from "../../UI/profile_icon.svg";
import support_icon from "../../UI/support_icon.svg";
import logout_icon from "../../UI/logout_icon.svg";
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";

const ManagerMainProfile = () => {
    return (
        <div className="container">
            <MenuBarManager></MenuBarManager>
            <div className="content">
                <Extra></Extra>
                <div className="content-page">
                    Profile
                </div>
            </div>
        </div>
    );
};

export default ManagerMainProfile;