import React from 'react';
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";

const ModeratorMain = () => {
    return (
        <div className="container">
            <MenuBarMain></MenuBarMain>
            <div className="content">
                <Extra></Extra>
                <div className="content-page">
                    Statistics Moderator
                </div>
            </div>
        </div>
    );
};

export default ModeratorMain;