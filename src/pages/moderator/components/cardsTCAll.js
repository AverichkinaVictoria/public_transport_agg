import React from 'react';
import no_bttn from "../../../UI/no_button.svg";

const CardsTcAll = ({compAll, companies}) => {
    const no_click = async () => {
        //полностью удалить из массива
        //запрос на удаление по id
        const index = compAll.companies.indexOf(companies);
        if (index > -1) {
            compAll.companies.splice(index, 1); // 2nd parameter means remove one item only
        }
        console.log('no')
        console.log(companies.id)

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
                    <button className="yes-no-bttn" onClick={no_click}><img src={no_bttn} /></button>
                </div>
            </div>
        </div>
    );
};

export default CardsTcAll;