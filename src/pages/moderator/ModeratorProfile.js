import React, {useContext, useEffect, useState} from 'react';
import '../../styles/styles_for_pages/Moderator.css'
import MenuBarMain from "./components/MenuBarMain";
import Extra from "../extra";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';

import profilePic from "../../UI/account_img.jpg";
import ProfileCard from "./components/profileCard";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {getCurrentUser} from "../../http/userAPI";
import {getCompaniesFiles, getCurrentUserProfile} from "../../http/moderatorAPI";
import {toJS} from "mobx";

const ModeratorProfile = observer(() => {
    const {user} = useContext(Context)

    // const [img, setImg] = useState('')

    const {usersArr} = useContext(Context)

    useEffect(() => {
        user.setUser(localStorage.getItem('user'))
        const ans1 = getCurrentUserProfile(localStorage.getItem('email')).then(function (response){
            user.setUser(response.data)
            // user.setImg('smth')
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

                        <ProfileCard user_img={user.img}></ProfileCard>

                    </div>
                    <div className="bottom-profile">
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ModeratorProfile;