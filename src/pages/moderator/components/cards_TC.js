import React from 'react';
import yes_bttn from "../../../UI/yes_button.svg";
import no_bttn from "../../../UI/no_button.svg";
// import {Container} from "@mui/material";
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";


const CardsTc = ({compAll, companies}) => {
    const yes_click = async () => {
        //запрос на добавление по id
        console.log('yes')
        console.log(companies.id)
        companies.isActive = false
    }

    const no_click = async () => {
        // полностью удалить из массива
        //запрос на удаление по id
        const index = compAll.companies.indexOf(companies);
        if (index > -1) {
            compAll.companies.splice(index, 1); // 2nd parameter means remove one item only
        }
        console.log('no')
    }

    return (

        <div className="moderator-TC-card">



            <div className="card-main">
                <div className="card">
                    <div className="card__title"></div>
                    <div className="card__body">
                        {/*<div>*/}
                        {/*    <div className="inside-title">*/}
                        {/*        Name:*/}
                        {/*    </div>*/}
                        {/*    <div className="inside-title-alt">*/}
                        {/*        Что такое Lorem Ipsum?*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    <div className="inside-title">*/}
                        {/*        Address:*/}
                        {/*    </div>*/}
                        {/*    <div className="inside-title-alt">*/}
                        {/*        Что такое Lorem Ipsum?*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    <div className="inside-title">*/}
                        {/*        Phone:*/}
                        {/*    </div>*/}
                        {/*    <div className="inside-title-alt">*/}
                        {/*        Что такое Lorem Ipsum?*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    <div className="inside-title">*/}
                        {/*        Website:*/}
                        {/*    </div>*/}
                        {/*    <div className="inside-title-alt">*/}
                        {/*        Что такое Lorem Ipsum?*/}


                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    <div className="inside-title">*/}
                        {/*        Documents:*/}
                        {/*    </div>*/}
                        {/*    <div className="inside-title-alt">*/}
                        {/*        Что такое Lorem Ipsum?*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="card-moderator-1">
                            <div className="card-moderator-2">
                                <div className="card-moderator-3" >
                                    <p>Name:</p>
                                    <p>Address:</p>
                                    <p>Phone:</p>
                                    <p>Website:</p>
                                    <p>Documents:</p>
                                </div>
                                <div className="card-moderator-4">
                                    <p>{companies.name}</p>
                                    <p>{companies.address}</p>
                                    <p>{companies.phone}</p>
                                    <p>{companies.website}</p>
                                    <p>{companies.documents}</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="bttns-moderator">
                    <button className="yes-no-bttn" onClick={yes_click}><img src={yes_bttn} /></button>
                    <button className="yes-no-bttn" onClick={no_click}><img src={no_bttn} /></button>
                </div>
            </div>
        </div>
    );
};

export default CardsTc;