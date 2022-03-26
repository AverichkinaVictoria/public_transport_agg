import React, {useContext} from 'react';
import '../../../styles/styles_for_pages/Manager.css'
import {
    AUTH_ROUTE,
    MANAGER_MAIN_FEEDBACK_ROUTE,
    MANAGER_MAIN_PROFILE_ROUTE,
    MANAGER_MAIN_ROUTE,
    MANAGER_MAIN_ROUTES_ROUTE, MANAGER_MAIN_SUPPORT_ROUTE, MANAGER_MAIN_TC_ROUTE,
    MANAGER_MAIN_VEHICLES_ROUTE
} from "../../../utils/consts";
import vehicle_icon from "../../../UI/Vehicles_icon.svg";
import routes_icon from "../../../UI/routes_icon.svg";
import feedback_icon from "../../../UI/feedback_icon.svg";
import trans_company_icon from "../../../UI/trans_company_icon.svg";
import profile_icon from "../../../UI/profile_icon.svg";
import support_icon from "../../../UI/support_icon.svg";
import logout_icon from "../../../UI/logout_icon.svg";
import {useNavigate} from "react-router";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useTranslation} from "react-i18next";

const MenuBarManager = observer(() => {
    let navigate = useNavigate()
    const {user} = useContext(Context)
    const { t,i18n  } = useTranslation();

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
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
        i18n.changeLanguage('eng')
        navigate(AUTH_ROUTE)
    }

    return (
        <div className='manager-menu-bar'>
            <ul className="sidebar">
                <h1 className="h1-Manager">Public Transport</h1>
                <li className="li-ManagerMain">
                <a className="a-ManagerMain" onClick={moveManagerMain}><span>{user.user.firstName}<br/>
                    {user.user.middleName}<br/>
                    {user.user.lastName}<br/>
                    {user.user.email}
                </span></a>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainVehicles}> <img src={vehicle_icon} className="icons" alt="menu"/>
                        {/*Vehicles*/}
                            {t('menu.manager_menu2')}
                        </a>

                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainRoutesRoute}>
                        <img src={routes_icon} className="icons" alt="menu"/>
                            {t('menu.manager_menu3')}
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainFeedback}>
                        <img src={feedback_icon} className="icons" alt="menu"/>
                            {t('menu.manager_menu4')}
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainTC}>
                        <img src={trans_company_icon} className="icons" alt="menu"/>
                            {t('menu.manager_menu5')}
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainProfile}>
                        <img src={profile_icon} className="icons" alt="menu"/>
                            {t('menu.manager_menu6')}
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainSupport}>
                        <img src={support_icon} className="icons" alt="menu"/>
                            {t('menu.manager_menu7')}</a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagerMainAuth}>
                        <img src={logout_icon} className="icons" alt="menu"/>
                            {t('menu.manager_menu8')}
                        </a>
                    </span>
                </li>
            </ul>
        </div>
    );
});

export default MenuBarManager;