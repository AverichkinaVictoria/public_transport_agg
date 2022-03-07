import React, {useContext, useEffect} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';

import profilePic from "../../UI/account_img.jpg";
import ProfileCard from "./components/profileCard";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {getCurrentUser} from "../../http/userAPI";

const ModeratorProfile = observer(() => {
    const {user} = useContext(Context)

    const {usersArr} = useContext(Context)

    useEffect(() => {
        getCurrentUser().then(data => {
            usersArr.setTest(data.data)
            console.log('USE EFFECT PROFILE>>>')
        }).finally()
    }, [])

    return (
        <div className='moderator-menu-bar'>
            <div className="container">
                <MenuBarMain></MenuBarMain>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">

                        <ProfileCard user={user}></ProfileCard>

                    </div>
                    <div className="bottom-profile">
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ModeratorProfile;