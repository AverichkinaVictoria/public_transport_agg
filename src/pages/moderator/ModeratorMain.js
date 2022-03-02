import React, {useContext} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import {Context} from "../../index";

const ModeratorMain = () => {
    const {companies} = useContext(Context)
    return (
        <div className='moderator-menu-bar'>
            <div className="container">
                <MenuBarMain></MenuBarMain>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">
                        Statistics Moderator

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModeratorMain;