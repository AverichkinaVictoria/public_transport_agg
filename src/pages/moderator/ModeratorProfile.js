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
import {getCurrentUserProfile} from "../../http/moderatorAPI";
import {toJS} from "mobx";

const ModeratorProfile = observer(() => {
    const {user} = useContext(Context)

    const {usersArr} = useContext(Context)

    useEffect(() => {
        const ans1 = getCurrentUserProfile(localStorage.getItem('email')).then(function (response){
            user.setUser(response.data)
            console.log('THIS USER>>>')
            console.log(toJS(user.user))
        })
    }, [])

    return (
        <div className='moderator-menu-bar'>
            <div className="container">
                <MenuBarMain></MenuBarMain>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">

                        <ProfileCard></ProfileCard>

                    </div>
                    <div className="bottom-profile">
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ModeratorProfile;