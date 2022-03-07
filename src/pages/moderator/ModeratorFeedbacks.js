import React, {useContext, useEffect} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import CardManager from "./components/cardManager";
import {Context} from "../../index";
import CardFeedbacks from "./components/cardFeedbacks";
import {observer} from "mobx-react-lite";
import {getCurrentUser} from "../../http/userAPI";

const ModeratorFeedbacks = observer(() => {
    const {feedbacksArr} = useContext(Context)

    const {usersArr} = useContext(Context)

    useEffect(() => {
        getCurrentUser().then(data => {
            usersArr.setTest(data.data)
            console.log('USE EFFECT FEEDBACKS>>>')
        }).finally()
    }, [])

    return (
        <div className='moderator-menu-bar'>
            <div className="container">
                <MenuBarMain></MenuBarMain>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">
                        <div className="card-header">
                            <div className="card__title-header"></div>
                            <div className="card__body-header">
                                <div className="inside-title-header">
                                    All feedbacks:
                                </div>
                            </div>
                        </div>


                        {feedbacksArr.feedbacks.map(feedbacks =>{
                            return <CardFeedbacks key={feedbacks.id} feedbacksAll= {feedbacksArr} feedbacks={feedbacks}/>}
                        )}



                        <div className="extra-bottom"></div>
                        <div className="extra-bottom"></div>
                        <div className="bottom-profile"></div>
                        <div className="bottom-profile"></div>
                        <div className="bottom-profile"></div>
                        <div className="bottom-profile"></div>
                        <div className="bottom-profile"></div>
                        <div className="bottom-profile"></div>

                    </div>
                </div>
            </div>
        </div>
    );
});

export default ModeratorFeedbacks;