import React from 'react';
import ManagerMain from "./ManagerMain";
import statictic_icon from "../UI/statistic_icon.svg";
import {
    AUTH_ROUTE,
    MANAGER_MAIN_FEEDBACK_ROUTE,
    MANAGER_MAIN_PROFILE_ROUTE,
    MANAGER_MAIN_ROUTE,
    MANAGER_MAIN_ROUTES_ROUTE, MANAGER_MAIN_SUPPORT_ROUTE, MANAGER_MAIN_TC_ROUTE,
    MANAGER_MAIN_VEHICLES_ROUTE
} from "../utils/consts";
import vehicle_icon from "../UI/Vehicles_icon.svg";
import routes_icon from "../UI/routes_icon.svg";
import feedback_icon from "../UI/feedback_icon.svg";
import trans_company_icon from "../UI/trans_company_icon.svg";
import profile_icon from "../UI/profile_icon.svg";
import support_icon from "../UI/support_icon.svg";
import logout_icon from "../UI/logout_icon.svg";
import Extra from "./extra";
import '../styles/styles_for_pages/ManagerMainVehicles.css'

const ManagerMainVehicles = () => {
    return (
        <div className="container">
            <ul className="sidebar">
                <h1 className="h1-Manager">Public Transport</h1>
                <li className="li-ManagerMain">
                    <a className="a-ManagerMain" href={MANAGER_MAIN_PROFILE_ROUTE}><span>First name<br/>
                    Middle name<br/>
                    Last name<br/>
                    email@mail.ru
                </span></a>
                </li>
                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MANAGER_MAIN_ROUTE}>
                            <img src={statictic_icon} className="icons" alt="menu"/>
                        Statistics
                            </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MANAGER_MAIN_VEHICLES_ROUTE}> <img src={vehicle_icon} className="icons" alt="menu"/>
                        Vehicles</a>

                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MANAGER_MAIN_ROUTES_ROUTE}>
                        <img src={routes_icon} className="icons" alt="menu"/>
                        Routes
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MANAGER_MAIN_FEEDBACK_ROUTE}>
                        <img src={feedback_icon} className="icons" alt="menu"/>
                        Feedback
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MANAGER_MAIN_TC_ROUTE}>
                        <img src={trans_company_icon} className="icons" alt="menu"/>
                        Transport company
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MANAGER_MAIN_PROFILE_ROUTE}>
                        <img src={profile_icon} className="icons" alt="menu"/>
                        Profile
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MANAGER_MAIN_SUPPORT_ROUTE}>
                        <img src={support_icon} className="icons" alt="menu"/>
                        Support service</a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={AUTH_ROUTE}>
                        <img src={logout_icon} className="icons" alt="menu"/>
                        Log out
                        </a>
                    </span>
                </li>


            </ul>

            <div className="content">
                <Extra></Extra>
                <div className="content-page">
                    Vehicles
                </div>
            </div>
        </div>
    );
};

export default ManagerMainVehicles;