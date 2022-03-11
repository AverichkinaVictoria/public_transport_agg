import React from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";

const ManagerMainFeedback = () => {
    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page-profile">
                        <div>
                            <p><input type="text" placeholder="Subject"></input></p>
                            <p><textarea rows="10" cols="40" placeholder="Input message..."></textarea></p>
                            <p><button type='submit'>Submit</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerMainFeedback;