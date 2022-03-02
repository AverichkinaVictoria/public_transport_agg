import React, {useContext} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import CardsTc from "./components/cards_TC";
import CardsTcAll from "./components/cardsTCAll";
import CardManager from "./components/cardManager";

const ModeratorManagers = observer(() => {
    const {usersArr} = useContext(Context)

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
                                    All managers:
                                </div>
                            </div>
                        </div>

                        {usersArr.users.map(users =>{ if(users.role==='manager'){
                            return <CardManager key={users.id} usersAll= {usersArr} users={users}/>}}
                        )}



                        <div className="extra-bottom"></div>

                    </div>
                </div>
            </div>
        </div>
    );
});

export default ModeratorManagers;