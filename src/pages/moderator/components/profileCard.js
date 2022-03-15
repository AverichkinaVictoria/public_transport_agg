import React, {useContext, useEffect, useState} from 'react';
import profilePic from "../../../UI/account_img.jpg";
import {useNavigate} from "react-router";
import {AUTH_ROUTE, MANAGER_MAIN_ROUTE, PASSWORD_RESET_ROUTE} from "../../../utils/consts";
import {
    addUser, getAllFeedbacks,
    getCompaniesFiles,
    getCurrentUser, getCurrentUserProfile,
    getHelpDesk, postFeedbacks, putCompaniesFiles,
    putCurrentUserProfile
} from "../../../http/moderatorAPI";
import {Context} from "../../../index";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";
import axios from "axios";
import {useTranslation} from "react-i18next";

const ProfileCard = observer((user_img) => {
    const {user} = useContext(Context)

    const [firstName, setFirstName] = useState(toJS(user.user).firstName)
    const [middleName, setMiddleName] = useState(toJS(user.user).middleName)
    const [lastName, setLastName] = useState(toJS(user.user).lastName)
    const [email, setEmail] = useState(toJS(user.user).email)
    const [phone, setPhone] = useState(toJS(user.user).phone)
    const [file, setFile] = useState(null)
    const [img, setImg] = useState(profilePic)
    const [img_id, setImg_id] = useState(profilePic)
    const [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate()
    const { t,i18n  } = useTranslation();

    useEffect(() => {
        user.setUser(localStorage.getItem('user'))
        const ans1 = getCurrentUserProfile(localStorage.getItem('email')).then(function (response){
            try {
                user.setUser(response.data)
                // user.setImg('smth')
                console.log('THIS USER>>>')
                console.log(response.data)
                setFirstName(response.data.firstName)
                setMiddleName(response.data.middleName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
                setPhone(response.data.phone)
                // setImg(response.data.imageUrl)
                getCompaniesFiles(response.data.imageUrl).then(function (res){
                    setImg(res.data.url)
                })
            } catch (e) {
                console.log(e)
            }

        })
    }, [])



    const selectFile = e => {
        setFile(e.target.files[0])
        setImg(URL.createObjectURL(e.target.files[0]))

        putCompaniesFiles('file').then(function (response){


            var formData = new FormData();
            formData.append("file", e.target.files[0]);
            axios.post(response.data.url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (res){
                console.log("RESULT>>>")
                console.log(res.data)

                setImg_id(res.data.id)

                getCompaniesFiles(res.data.id).then(function (response){

                    setImg(response.data.url)
                    console.log("SMTH>>>")
                    console.log(response.data.url)

                    localStorage.setItem('user_img', response.data.url)
                    const ans1 = putCurrentUserProfile(localStorage.getItem('id'),firstName,lastName,middleName,email,phone,0,'',localStorage.getItem('role'),res.data.id).then(function (response){

                        const ans1 = getCurrentUserProfile(email).then(function (response){
                            user.setUser(response.data)

                        }).catch(function(){})
                    })
                })

            })
        })








    }

    const saveChanges = () => {
        console.log('USER EMAIL>>>')
        console.log(toJS(user.user).email)
        const ans1 = putCurrentUserProfile(localStorage.getItem('id'),firstName,lastName,middleName,email,phone,0,'',localStorage.getItem('role'),user.user.imageUrl).then(function (response){
            const ans1 = getCurrentUserProfile(email).then(function (response){
                user.setUser(response.data)

            }).catch(function(){})
        })

        // const ans = getCurrentUser(user.email).then(function (response){
        //     console.log('USER DATA>>>')
        //     console.log(response)
        // })
        //сбросить токен
        // getHelpDesk().then(function (response){
        //     console.log("HELPDESK>>>")
        //     console.log(response)
        // })


    }

    const resetPassword = () => {
        //сбросить токен
        // const r = getAllFeedbacks().then(function (response){
        //     console.log('GET FEEDBACKS RES >>>')
        //     console.log(response)
        // })

        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()

        navigate(PASSWORD_RESET_ROUTE)
    }





    return (

        <div className="profile-main-moderator">
            <div className="profile-img-fields-moderator">
                <div className="moderator-img-container">
                    <img src={img} alt="profils pic" />
                </div>



                    <label className="moderator-load-img-profile">
                        <input type="file" name="myImage" accept="image/x-png,image/jpeg, image/jpg" onChange={selectFile} />
                        {/*Load image*/}
                        {t('profile.moderator_load')}
                    </label>


            </div>
            <div className="profile-fields-moderator">
                <div className="profile-field">
                    <h2 className="profile-field-h2">{t('profile.moderator_first_name')}</h2>
                    <input type="text" id="first-name" className="profile-field-input" placeholder={user.user.firstName} required=""
                           autoFocus="" value={firstName || ''} onChange={e => setFirstName(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">{t('profile.moderator_middle_name')}</h2>
                    <input type="text" id="middle-name" className="profile-field-input" placeholder={user.user.middleName} required=""
                           autoFocus="" value={middleName || ''} onChange={e => setMiddleName(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">{t('profile.moderator_last_name')}</h2>
                    <input type="text" id="last-name" className="profile-field-input" placeholder={user.user.lastName} required=""
                           autoFocus="" value={lastName || ''} onChange={e => setLastName(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">{t('profile.moderator_email')}</h2>
                    <input readOnly type="text" id="last-name" className="profile-field-input" placeholder={user.user.email} required=""
                           autoFocus="" value={email || ''} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">{t('profile.moderator_phone')}</h2>
                    <input type="text" id="last-name" className="profile-field-input" placeholder={user.user.phone} required=""
                           autoFocus="" value={phone || ''} onChange={e => setPhone(e.target.value)}/>
                </div>

                    <button className="moderator-submit-profile" onClick={saveChanges}>
                        {/*Save changes*/}
                        {t('profile.moderator_save')}
                    </button>
                <button className="moderator-submit-profile" onClick={resetPassword}>
                    {/*Reset password*/}
                    {t('profile.moderator_change_password')}
                </button>

                </div>

        </div>
    );
});

export default ProfileCard;