import React, {useContext} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import yes_bttn from "../../UI/yes_button.svg";
import no_bttn from "../../UI/no_button.svg";
import {login} from "../../http/userAPI";
import {MANAGER_MAIN_ROUTE} from "../../utils/consts";
import CardsTc from "./components/cards_TC";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import CardsTcAll from "./components/cardsTCAll";

const ModeratorTc = observer(() => {

    const {companies} = useContext(Context)


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
                                    For moderation:
                                </div>
                            </div>
                        </div>

                        {companies.companies.map(company =>{ if(company.isActive){
                            return <CardsTc key={company.id} compAll= {companies} companies={company}/>}}
                        )}



                        <div className="card-header">
                            <div className="card__title-header"></div>
                            <div className="card__body-header">
                                <div className="inside-title-header">
                                    All:
                                </div>
                            </div>
                        </div>

                        {companies.companies.map(company =>{ if(!company.isActive){
                            return <CardsTcAll key={company.id} compAll= {companies} companies={company}/>}}
                        )}
                        <div className="extra-bottom"></div>


                    </div>
                </div>
            </div>
        </div>
    );
});

export default ModeratorTc;