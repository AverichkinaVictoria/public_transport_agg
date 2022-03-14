import React from 'react';
import no_bttn from "../../../UI/no_button.svg";
import star from "../../../UI/Star.svg";
import {observer} from "mobx-react-lite";
import { useTranslation, Trans } from 'react-i18next';

const CardFeedbacks = observer(({feedbacksAll, feedbacks}) => {
    const { t,i18n  } = useTranslation();
    const no_click = async () => {
        //запрос на удаление по id
        const index = feedbacksAll.feedbacks.indexOf(feedbacks);
        if (index > -1) {
            feedbacksAll.feedbacks.splice(index, 1); // 2nd parameter means remove one item only
        }
        console.log('no')

    }

    let lang = {
        english: {
            moderator_first_name: 'First name:',
            moderator_last_name: 'Last name:',
            moderator_middle_name: 'Middle name:',
            moderator_email: 'Email:',
            moderator_company: 'Company:',
            moderator_vehicle: 'Vehicle:',
            moderator_departure: 'Departure:',
            moderator_arrival: 'Arrival:',
            moderator_rating: 'Rating:'
        },
        russian: {
            moderator_first_name: 'Имя:',
            moderator_last_name: 'Фамилия:',
            moderator_middle_name: 'Отчество:',
            moderator_email: 'Email:',
            moderator_company: 'Компания:',
            moderator_vehicle: 'Транспортное средство:',
            moderator_departure: 'Отправление:',
            moderator_arrival: 'Прибытие:',
            moderator_rating: 'Оценка:'
        }
    };


    // localStorage.getItem('language') === "eng"
    //     ? (lang = lang.english)
    //     : (lang = lang.russian);
    // console.log(localStorage.getItem('language'))

    return (
        <div className="moderator-TC-card">

            <div className="card-main">
                <div className="card-feedbacks">
                    <div className="card__title"></div>
                    <div className="card__body">
                        <div className="card-moderator-1-f">
                            <div className="card-moderator-2">
                                <div className="card-moderator-3" >
                                    <p> {t('feedbacks.moderator_first_name')}</p>
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
});

export default CardFeedbacks;