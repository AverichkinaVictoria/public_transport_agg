import React, {useContext, useState} from 'react';
import menu_but from "../UI/menu_but.svg";
import search_but from "../UI/search_but.svg";
import eng_lan from "../UI/uk_flag.svg";
import rus_lan from "../UI/russian_flag.svg";
import account_img from "../UI/account_img.jpg";
import '../styles/styles_for_pages/extra.css'
import {observer} from "mobx-react-lite";
import {
    MANAGER_MAIN_PROFILE_ROUTE,
    MANAGER_MAIN_ROUTE,
    MODERATOR_MAIN_PROFILE_ROUTE,
    MODERATOR_MAIN_TC_ROUTE
} from "../utils/consts";
import {useNavigate} from "react-router";
import {Context} from "../index";
import { useTranslation, Trans } from 'react-i18next';

const Extra = observer(() => {
    let navigate = useNavigate()
    const {user} = useContext(Context)
    let flag = eng_lan
    const { t, i18n } = useTranslation();

    localStorage.getItem('language') === "rus"
        ? (flag = rus_lan)
        : (flag = eng_lan);

    const moveMainProfile = async() => {
        if (user.role==='manager') {
            console.log('manager')
            navigate(MANAGER_MAIN_PROFILE_ROUTE)
        } else if (user.role==='moderator') {
            console.log('moderator')
            navigate(MODERATOR_MAIN_PROFILE_ROUTE)
        }
    }

    const changeLan = () => {
        if (localStorage.getItem('language') === 'eng') {
            localStorage.setItem('language', 'rus')
            flag = rus_lan
            i18n.changeLanguage('rus')
        } else {
            localStorage.setItem('language', 'eng')
            flag = eng_lan
            i18n.changeLanguage('eng')
        }
        // window.location.reload();
    }



    return (
            <div className="root">
                <header className="MuiPaper-root MuiPaper-elevation  MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-ManagerHeader">
                    <div className="MuiToolBar-root MuiToolBar-gutters MuiToolBar-regular css-ManagerHeaderInside">
                        {/*<button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-ManagerHeaderMenuButton"*/}
                        {/*        tabIndex="0" type="button">*/}
                        {/*    <img src={menu_but} className="Manager-menu-icon" alt="menu"/>*/}
                        {/*    <span className="MuiTouchRipple-root css-span"></span>*/}
                        {/*</button>*/}

                        <div>
                            {/*<button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-button-search"*/}
                            {/*        tabIndex="0" type="button" aria-label="Search">*/}
                            {/*    <img src={search_but} className="Manager-search-icon" alt="search"/>*/}
                            {/*    <span className="MuiTouchRipple-root css-button-span"></span>*/}
                            {/*</button>*/}
                        </div>



                        <div className="MuiBox-root css-empty"></div>

                        <div className="Manager-header-right-buttons-group">
                            <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-lan-button" tabIndex="0" type="button" onClick={changeLan}>
                                <img src={flag} className="Manager-language-icon" alt="English"/>
                                <span className="MuiTouchRipple-root css-lan-button-span"></span>
                            </button>

                            <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-user-button"
                                    tabIndex="0" type="button" onClick={moveMainProfile}>
                                <div className="MuiAvatar-root MuiAvatar-circular css-div-avatar">
                                    <img alt="photoURL" src={account_img} className="MuiAvatar-img css-image-avatar"/>
                                </div>
                                <span className="MuiTouchRipple-root css-lan-button-span"></span></button>
                        </div>


                    </div>
                </header>
            </div>
    );
});

export default Extra;