import React from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";

const ManagerMainSupport = () => {
    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">
                        Support
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerMainSupport;