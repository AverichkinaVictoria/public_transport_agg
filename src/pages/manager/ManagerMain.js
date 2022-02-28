import React from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Paper from '@mui/material/Paper';
import eng_lan from '../../UI/uk_flag.svg';
import menu_but from '../../UI/menu_but.svg';
import search_but from '../../UI/search_but.svg';
import account_img from '../../UI/account_img.svg';
import {
    AUTH_ROUTE,
    MANAGER_MAIN_FEEDBACK_ROUTE, MANAGER_MAIN_PROFILE_ROUTE,
    MANAGER_MAIN_ROUTE,
    MANAGER_MAIN_ROUTES_ROUTE, MANAGER_MAIN_SUPPORT_ROUTE, MANAGER_MAIN_TC_ROUTE,
    MANAGER_MAIN_VEHICLES_ROUTE,
    PASSWORD_RESET_ROUTE,
    REGISTER_ROUTE
} from "../../utils/consts";
import Extra from "../extra";

import statictic_icon from "../../UI/statistic_icon.svg";
import vehicle_icon from "../../UI/Vehicles_icon.svg";
import feedback_icon from "../../UI/feedback_icon.svg";
import logout_icon from "../../UI/logout_icon.svg";
import profile_icon from "../../UI/profile_icon.svg";
import routes_icon from "../../UI/routes_icon.svg";
import support_icon from "../../UI/support_icon.svg";
import trans_company_icon from "../../UI/trans_company_icon.svg";
import MenuBarManager from "./components/MenuBarManager";

const ManagerMain = () => {
    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">
                        Statistics
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ManagerMain;