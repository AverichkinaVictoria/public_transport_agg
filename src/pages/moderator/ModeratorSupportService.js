import React from 'react';
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";

const ModeratorSupportService = () => {
    return (
        <div className="container">
            <MenuBarMain></MenuBarMain>
            <div className="content">
                <Extra></Extra>
                <div className="content-page">
                    Moderator Support service
                </div>
            </div>
        </div>
    );
};

export default ModeratorSupportService;