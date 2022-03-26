import React, { useContext, useEffect } from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import { observer } from 'mobx-react-lite';
import Context from '@mui/base/TabsUnstyled/TabsContext';
import { getCurrentUser } from '../../http/userAPI';
import * as consts from "../../utils/ConstantsManager";
import {getCurrentUserProfile} from "../../http/moderatorAPI";
import {toJS} from "mobx";
import ProfileCard from "../moderator/components/profileCard";
import ProfileManagerCard from "./components/profileManagerCard";

const ManagerMainProfile = observer(() => {


    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">
                        <ProfileManagerCard> </ProfileManagerCard>
                    </div>
                    <div className="bottom-profile">
                    </div>
                </div>
            </div>
        </div>
    );
})

export default ManagerMainProfile;