import React from 'react';
import '../../../styles/styles_for_pages/Moderator.css'
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
    MODERATOR_MAIN_USERS_ROUTE
} from "../../../utils/consts";
import statictic_icon from "../../../UI/statistic_icon.svg";
import trans_company_icon from "../../../UI/trans_company_icon.svg";
import managers_icon from "../../../UI/managers_icon.svg";
import users_icon from "../../../UI/users_moderator_icon.svg";
import profile_icon from "../../../UI/profile_icon.svg";
import support_icon from "../../../UI/support_icon.svg";
import logout_icon from "../../../UI/logout_icon.svg";
import feedbacks_icon from "../../../UI/feedbacks_icon.svg";

const MenuBarMain = () => {
    return (
        <div className='moderator-menu-bar'>
            <ul className="sidebar">
                <h1 className="h1-Manager">Public Transport</h1>
                <li className="li-ManagerMain">
                    <a className="a-ManagerMain" href={MODERATOR_MAIN_PROFILE_ROUTE}><span>First name<br/>
                    Middle name<br/>
                    Last name<br/>
                    email@mail.ru
                </span></a>
                </li>
                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MODERATOR_MAIN_ROUTE}>
                            <img src={statictic_icon} className="icons" alt="menu"/>
                        Statistics
                            </a>
                    </span>
                </li>


                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MODERATOR_MAIN_TC_ROUTE}>
                        <img src={trans_company_icon} className="icons" alt="menu"/>
                        Transport companies
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MODERATOR_MAIN_MANAGERS_ROUTE}>
                        <img src={managers_icon} className="icons" alt="menu"/>
                        Managers
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MODERATOR_MAIN_USERS_ROUTE}>
                        <img src={users_icon} className="icons" alt="menu"/>
                        Users
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MODERATOR_MAIN_FEEDBACK_ROUTE}>
                        <img src={feedbacks_icon} className="icons" alt="menu"/>
                        Feedbacks
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MODERATOR_MAIN_PROFILE_ROUTE}>
                        <img src={profile_icon} className="icons" alt="menu"/>
                        Profile
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" href={MODERATOR_MAIN_SUPPORT_ROUTE}>
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
        </div>
    );
};

export default MenuBarMain;