import React from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";

const ModeratorFeedbacks = () => {
    return (
        <div className='moderator-menu-bar'>
            <div className="container">
                <MenuBarMain></MenuBarMain>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">
                        Moderator Feedbacks
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModeratorFeedbacks;