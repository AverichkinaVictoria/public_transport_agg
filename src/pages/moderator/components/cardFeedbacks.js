import React from 'react';
import no_bttn from "../../../UI/no_button.svg";
import star from "../../../UI/Star.svg";

const CardFeedbacks = ({feedbacksAll, feedbacks}) => {
    const no_click = async () => {
        //запрос на удаление по id
        const index = feedbacksAll.feedbacks.indexOf(feedbacks);
        if (index > -1) {
            feedbacksAll.feedbacks.splice(index, 1); // 2nd parameter means remove one item only
        }
        console.log('no')

    }

    return (
        <div className="moderator-TC-card">

            <div className="card-main">
                <div className="card-feedbacks">
                    <div className="card__title"></div>
                    <div className="card__body">
                        <div className="card-moderator-1-f">
                            <div className="card-moderator-2">
                                <div className="card-moderator-3" >
                                    <p>First name:</p>
                                    <p>Middle name:</p>
                                    <p>Last name:</p>
                                    <p>Email:</p>
                                    <p>Company:</p>
                                    <p>Vehicle:</p>
                                    <p>Departure:</p>
                                    <p>Arrival:</p>
                                    <p>Rating:</p>
                                </div>
                                <div className="card-moderator-4">
                                    <p>{feedbacks.firstName}</p>
                                    <p>{feedbacks.middleName}</p>
                                    <p>{feedbacks.lastName}</p>
                                    <p>{feedbacks.email}</p>
                                    <p>{feedbacks.tc}</p>
                                    <p>{feedbacks.vehicle}</p>
                                    <p>{feedbacks.departureCity}</p>
                                    <p>{feedbacks.arrivalCity}</p>
                                    {[...Array(feedbacks.rating)].map((st) => {
                                        return (
                                            <img src={star} className="feedback-ic-star"/>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="description-moderator">
                    <p>{feedbacks.desc}</p>
                </div>
                <div className="bttns-moderator">
                    <button className="yes-no-bttn" onClick={no_click}><img src={no_bttn} /></button>
                </div>
            </div>
        </div>
    );
};

export default CardFeedbacks;