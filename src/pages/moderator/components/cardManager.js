import React, {useContext} from 'react';
import yes_bttn from "../../../UI/yes_button.svg";
import no_bttn from "../../../UI/no_button.svg";
import {Context} from "../../../index";

const CardManager = ({usersAll, users}) => {

    const no_click = async () => {
        //запрос на удаление по id
        const index = usersAll.users.indexOf(users);
        if (index > -1) {
            usersAll.users.splice(index, 1); // 2nd parameter means remove one item only
        }
        console.log('no')

    }

    return (

        <div className="moderator-TC-card">

            <div className="card-main">
                <div className="card">
                    <div className="card__title"></div>
                    <div className="card__body">
                        <div className="card-moderator-1">
                            <div className="card-moderator-2">
                                <div className="card-moderator-3" >
                                    <p>First name:</p>
                                    <p>Middle name:</p>
                                    <p>Last name:</p>
                                    <p>Email:</p>
                                    <p>Phone:</p>
                                </div>
                                <div className="card-moderator-4">
                                    <p>{users.firstName}</p>
                                    <p>{users.middleName}</p>
                                    <p>{users.lastName}</p>
                                    <p>{users.email}</p>
                                    <p>{users.phone}</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="bttns-moderator">
                    <button className="yes-no-bttn" onClick={no_click}><img src={no_bttn} /></button>
                </div>
            </div>
        </div>
    );
};

export default CardManager;