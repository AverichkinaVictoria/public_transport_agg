import React from 'react';
import '../../../styles/styles_for_pages/Manager.css'
import {
    AUTH_ROUTE,
    MANAGER_MAIN_FEEDBACK_ROUTE,
    MANAGER_MAIN_PROFILE_ROUTE,
    MANAGER_MAIN_ROUTE,
    MANAGER_MAIN_ROUTES_ROUTE, MANAGER_MAIN_SUPPORT_ROUTE, MANAGER_MAIN_TC_ROUTE,
    MANAGER_MAIN_VEHICLES_ROUTE, MODERATOR_MAIN_MANAGERS_ROUTE
} from "../../../utils/consts";
import statictic_icon from "../../../UI/statistic_icon.svg";
import vehicle_icon from "../../../UI/Vehicles_icon.svg";
import routes_icon from "../../../UI/routes_icon.svg";
import feedback_icon from "../../../UI/feedback_icon.svg";
import trans_company_icon from "../../../UI/trans_company_icon.svg";
import profile_icon from "../../../UI/profile_icon.svg";
import support_icon from "../../../UI/support_icon.svg";
import logout_icon from "../../../UI/logout_icon.svg";
import * as consts from "../../../utils/ConstantsManager";
import {useNavigate} from "react-router";



const MenuBarManager = () => {
    let navigate = useNavigate()

    const moveManagerMain = async() => {
        navigate(MANAGER_MAIN_PROFILE_ROUTE)
    }

    const moveManagerMainRoute = async() => {
        navigate(MANAGER_MAIN_ROUTE)
    }

    const moveManagerMainVehicles = async() => {
        navigate(MANAGER_MAIN_VEHICLES_ROUTE)
    }

    const moveManagerMainRoutesRoute = async() => {
        navigate(MANAGER_MAIN_ROUTES_ROUTE)
    }

    const moveManagerMainFeedback = async() => {
        navigate(MANAGER_MAIN_FEEDBACK_ROUTE)
    }

    const moveManagerMainTC = async() => {
        navigate(MANAGER_MAIN_TC_ROUTE)
    }

    const moveManagerMainProfile = async() => {
        navigate(MANAGER_MAIN_PROFILE_ROUTE)
    }

    const moveManagerMainSupport = async() => {
        navigate(MANAGER_MAIN_SUPPORT_ROUTE)
    }

    const moveManagerMainAuth = async() => {
        navigate(AUTH_ROUTE)
    }

    return (
        <div className='manager-menu-bar'>
            <ul className="sidebar">
                <h1 className="h1-Manager">Public Transport</h1>
                <li className="li-ManagerMain">
                <a className="a-ManagerMain" onClick={moveManagerMain}><span>{consts.MANAGER_PROFILE.first_name}<br/>
                    {consts.MANAGER_PROFILE.middle_name}<br/>
                    {consts.MANAGER_PROFILE.last_name}<br/>
                    {consts.MANAGER_PROFILE.email}
                </span></a>
                </li>
                {/* <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainRoute}>
                            <img src={statictic_icon} className="icons" alt="menu"/>
                        Statistics
                            </a>
                    </span>
                </li> */}

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainVehicles}> <img src={vehicle_icon} className="icons" alt="menu"/>
                        Vehicles</a>

                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainRoutesRoute}>
                        <img src={routes_icon} className="icons" alt="menu"/>
                        Routes
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainFeedback}>
                        <img src={feedback_icon} className="icons" alt="menu"/>
                        Feedback
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainTC}>
                        <img src={trans_company_icon} className="icons" alt="menu"/>
                        Transport company
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainProfile}>
                        <img src={profile_icon} className="icons" alt="menu"/>
                        Profile
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainSupport}>
                        <img src={support_icon} className="icons" alt="menu"/>
                        Support service</a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainAuth}>
                        <img src={logout_icon} className="icons" alt="menu"/>
                        Log out
                        </a>
                    </span>
                </li>


            </ul>
        </div>
    );
};

export default MenuBarManager;