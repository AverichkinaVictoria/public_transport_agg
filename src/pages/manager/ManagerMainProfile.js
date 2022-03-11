import React, { useContext, useEffect } from 'react';
import '../../styles/styles_for_pages/Manager.css'
import Extra from "../extra";
import MenuBarManager from "./components/MenuBarManager";
import { observer } from 'mobx-react-lite';
import Context from '@mui/base/TabsUnstyled/TabsContext';
import { getCurrentUser } from '../../http/userAPI';
import * as consts from "../../utils/ConstantsManager";

const ManagerMainProfile = () => {
    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page-profile">
                        <div className="left">
                            <p><img src={consts.MANAGER_PROFILE.icon} alt='icon'/></p>
                            <p><button type="submit">Load icon</button></p>
                        </div>
                        <div className="right">
                            <p>First name</p>
                            <p><input type="text" defaultValue={consts.MANAGER_PROFILE.first_name} placeholder="First name" /></p>
                            <p>Middle name</p>
                            <p><input type="text" defaultValue={consts.MANAGER_PROFILE.middle_name} placeholder="Middle name" /></p>
                            <p>Last name</p>
                            <p><input type="text" defaultValue={consts.MANAGER_PROFILE.last_name} placeholder="Last name" /></p>
                            <p>E-mail</p>
                            <p><input type="text" defaultValue={consts.MANAGER_PROFILE.email} placeholder="E-mail" /></p>
                            <p>Phone</p>
                            <p><input type="text" defaultValue={consts.MANAGER_PROFILE.phone} placeholder="Phone" /></p>
                            <p>Company</p>
                            <p><input type="text" defaultValue={consts.MANAGER_PROFILE.company} placeholder="Company" /></p>
                            <p><input type="text" placeholder="Change password" /></p>
                            <p><button type="submit">Save changes</button></p>
                        </div>
                    </div>
                    <div className="bottom-profile">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerMainProfile;