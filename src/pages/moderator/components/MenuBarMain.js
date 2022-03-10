import React, {useContext} from 'react';
import '../../../styles/styles_for_pages/Moderator.css'
import {
    AUTH_ROUTE, MODERATOR_MAIN_FEEDBACK_ROUTE,
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
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router";

const MenuBarMain = observer(() => {
    const {user} = useContext(Context)
    let navigate = useNavigate()

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
        navigate(AUTH_ROUTE)
    }

    const moveManagers = async() => {
        navigate(MODERATOR_MAIN_MANAGERS_ROUTE)
    }

    const moveMainProfile = async() => {
        navigate(MODERATOR_MAIN_PROFILE_ROUTE)
    }

    const moveMainRoute = () => {
        navigate(MODERATOR_MAIN_ROUTE)
    }

    const moveMainTCRoute = () => {
        navigate(MODERATOR_MAIN_TC_ROUTE)
    }

    const moveMainUsers = () => {
        navigate(MODERATOR_MAIN_USERS_ROUTE)
    }

    const moveMainFeedBack = () => {
        navigate(MODERATOR_MAIN_FEEDBACK_ROUTE)
    }

    const moveMainSupport = () => {
        navigate(MODERATOR_MAIN_SUPPORT_ROUTE)
    }

    return (
        <div className='moderator-menu-bar'>
            <ul className="sidebar">
                <h1 className="h1-Manager">Public Transport</h1>
                <li className="li-ManagerMain">
                    <a className="a-ManagerMain" onClick={moveMainProfile}><span>{user.user.firstName}<br/>
                        {user.user.middleName}<br/>
                        {user.user.lastName}<br/>
                        {user.user.email}
                </span></a>
                </li>
                {/*<li className="li-ManagerMain">*/}
                {/*    <span>*/}
                {/*        <a className="a-ManagerMain" onClick={moveMainRoute}>*/}
                {/*            <img src={statictic_icon} className="icons" alt="menu"/>*/}
                {/*        Statistics*/}
                {/*            </a>*/}
                {/*    </span>*/}
                {/*</li>*/}


                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveMainTCRoute}>
                        <img src={trans_company_icon} className="icons" alt="menu"/>
                        Transport companies
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveManagers}>
                        <img src={managers_icon} className="icons" alt="menu"/>
                        Managers
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveMainUsers}>
                        <img src={users_icon} className="icons" alt="menu"/>
                        Users
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveMainFeedBack}>
                        <img src={feedbacks_icon} className="icons" alt="menu"/>
                        Feedbacks
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveMainProfile}>
                        <img src={profile_icon} className="icons" alt="menu"/>
                        Profile
                        </a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={moveMainSupport}>
                        <img src={support_icon} className="icons" alt="menu"/>
                        Support service</a>
                    </span>
                </li>

                <li className="li-ManagerMain">
                    <span>
                        <a className="a-ManagerMain" onClick={logout}>
                        <img src={logout_icon} className="icons" alt="menu"/>
                        Log out
                        </a>
                    </span>
                </li>


            </ul>
        </div>
    );
});

export default MenuBarMain;