import React, {useContext, useEffect} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import CardManager from "./components/cardManager";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {getCurrentUser} from "../../http/userAPI";

const ModeratorUsers = observer(() => {
    const {usersArr} = useContext(Context)


    useEffect(() => {
        getCurrentUser().then(data => {
            usersArr.setTest(data.data)
            console.log('USE EFFECT USERS>>>')
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
                                    All users:
                                </div>
                            </div>
                        </div>

                        {usersArr.users.map(users =>{ if(users.role==='user'){
                            return <CardManager key={users.id} usersAll= {usersArr} users={users}/>}}
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

export default ModeratorUsers;