import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../index";
import {toJS} from "mobx";
import profilePic from "../../../UI/account_img.jpg";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {
    getCompaniesFiles,
    getCurrentUserProfile,
    postFeedbacks,
    putCompaniesFiles,
    putCurrentUserProfile
} from "../../../http/moderatorAPI";
import axios from "axios";
import {observer} from "mobx-react-lite";
import { getCompany, putCompany } from '../../../http/managerAPI';
import MenuBarManager from './MenuBarManager';
import Extra from '../../extra';

const TransportCompanyCard = observer(() => {
    const {user} = useContext(Context)

    const [companyName, setCompanyName] = useState(undefined)
    const [website, setWebsite] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    let navigate = useNavigate()
    const { t,i18n  } = useTranslation();

    function loadTransportCompany() {
        console.log("GETTING TC >>>>")

        getCompany().then(data => {
            if (companyName === undefined) {
                var d = data.data

                console.log(d)
                setCompanyName(d.legal_name)
                setWebsite(d.website)
                setPhone(d.phone)
                setAddress(d.address)
            }
        })
    }

    function saveChanges() {
        putCompany(companyName, website, phone, address)
    }

    return (
        <div className='manager-menu-bar'>
            <div className="container">
                <MenuBarManager></MenuBarManager>
                <div className="content">
                    <Extra></Extra>
                    <div className="content-page">
                    <div className="profile-main-moderator">
                        <div className="profile-fields-moderator">
                        {loadTransportCompany()}
                            <div className="profile-field">
                                <h2 className="profile-field-h2">Company name</h2>
                                <input type="text" className="profile-field-input" placeholder="Company name"
                                    onChange={e => setCompanyName(e.target.value)} defaultValue={companyName}/>
                            </div>
                            <div className="profile-field">
                                <h2 className="profile-field-h2">Address</h2>
                                <input type="text" className="profile-field-input" placeholder="Address"
                                    onChange={e => setAddress(e.target.value)} defaultValue={address}/>
                            </div>
                            <div className="profile-field">
                                <h2 className="profile-field-h2">Website</h2>
                                <input type="text" className="profile-field-input" placeholder="Website"
                                    onChange={e => setWebsite(e.target.value)} defaultValue={website}/>
                            </div>
                            <div className="profile-field">
                                <h2 className="profile-field-h2">Phone</h2>
                                <input type="text" className="profile-field-input" placeholder="Phone"
                                    onChange={e => setPhone(e.target.value)} defaultValue={phone}/>
                            </div>

                            <button className="moderator-submit-profile" onClick={() => saveChanges()}>
                                {t('profile.moderator_save')}
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default TransportCompanyCard;