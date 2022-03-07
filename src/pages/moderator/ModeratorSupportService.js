import React, {useContext, useEffect} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import {Context} from "../../index";
import {getCurrentUser} from "../../http/userAPI";
import {observer} from "mobx-react-lite";

const ModeratorSupportService = observer(() => {

    const {usersArr} = useContext(Context)

    useEffect(() => {
        getCurrentUser().then(data => {
            usersArr.setTest(data.data)
            console.log('USE EFFECT SUPPORT SERVICE>>>')
        }).finally()
    }, [])

    return (
        <div className='moderator-menu-bar'>
            <div className="container">
                <MenuBarMain></MenuBarMain>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">
                        Moderator Support service
                    </div>
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
    );
});

export default ModeratorSupportService;