import React from 'react';
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";

const ModeratorFeedbacks = () => {
    return (
        <div className="container">
            <MenuBarMain></MenuBarMain>
            <div className="content">
                <Extra></Extra>
                <div className="content-page">
                    Moderator Feedbacks
                </div>
            </div>
        </div>
    );
};

export default ModeratorFeedbacks;