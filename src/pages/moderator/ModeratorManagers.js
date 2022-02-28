import React from 'react';
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";

const ModeratorManagers = () => {
    return (
        <div className="container">
            <MenuBarMain></MenuBarMain>
            <div className="content">
                <Extra></Extra>
                <div className="content-page">
                    Moderator Manager
                </div>
            </div>
        </div>
    );
};

export default ModeratorManagers;