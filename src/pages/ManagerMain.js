import React from 'react';
import '../styles/styles_for_pages/ManagerMain.css'
import Paper from '@mui/material/Paper';
import eng_lan from '../UI/uk_flag.svg';
import menu_but from '../UI/menu_but.svg';
import search_but from '../UI/search_but.svg';
import account_img from '../UI/account_img.svg';

const ManagerMain = () => {
    return (
        <div className="root">
            <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-ManagerHeader">
                <div className="MuiToolBar-root MuiToolBar-gutters MuiToolBar-regular css-ManagerHeaderInside">
                    <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-ManagerHeaderMenuButton"
                            tabIndex="0" type="button">
                        <img src={menu_but} className="Manager-menu-icon" alt="menu"/>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>

                    <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1sr3j4o"
                            tabIndex="0" type="button" aria-label="Search">
                        <img src={search_but} className="Manager-search-icon" alt="search"/>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>

                    <div className="MuiBox-root css-i9gxme"></div>

                    <div className="Manager-header-right-buttons-group">
                        <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-78xwe4" tabIndex="0" type="button">
                            <img src={eng_lan} className="Manager-language-icon" alt="English"/>
                            <span className="MuiTouchRipple-root css-w0pj6f"></span>
                        </button>

                        <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-78xwe4"
                                tabIndex="0" type="button">
                            <div className="MuiAvatar-root MuiAvatar-circular css-1ciwozm">
                                <img alt="photoURL" src={account_img} className="MuiAvatar-img css-1hy9t21"/>
                            </div>
                            <span className="MuiTouchRipple-root css-w0pj6f"></span></button>
                    </div>


                </div>
            </header>
        </div>
    );
};

export default ManagerMain;