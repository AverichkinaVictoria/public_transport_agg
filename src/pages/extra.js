import React from 'react';
import menu_but from "../UI/menu_but.svg";
import search_but from "../UI/search_but.svg";
import eng_lan from "../UI/uk_flag.svg";
import account_img from "../UI/account_img.jpg";
import '../styles/styles_for_pages/extra.css'

const Extra = () => {
    return (
            <div className="root">
                <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-ManagerHeader">
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
                            <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-lan-button" tabIndex="0" type="button">
                                <img src={eng_lan} className="Manager-language-icon" alt="English"/>
                                <span className="MuiTouchRipple-root css-lan-button-span"></span>
                            </button>

                            <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-user-button"
                                    tabIndex="0" type="button">
                                <div className="MuiAvatar-root MuiAvatar-circular css-div-avatar">
                                    <img alt="photoURL" src={account_img} className="MuiAvatar-img css-image-avatar"/>
                                </div>
                                <span className="MuiTouchRipple-root css-lan-button-span"></span></button>
                        </div>


                    </div>
                </header>
            </div>
    );
};

export default Extra;