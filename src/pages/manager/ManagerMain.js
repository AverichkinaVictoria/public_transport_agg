import React, { useEffect } from 'react';
import { getCompany } from '../../http/managerAPI';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
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