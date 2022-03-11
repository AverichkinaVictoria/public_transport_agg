import React, {useContext, useState} from 'react';
import profilePic from "../../../UI/account_img.jpg";
import {useNavigate} from "react-router";
import {AUTH_ROUTE, MANAGER_MAIN_ROUTE, PASSWORD_RESET_ROUTE} from "../../../utils/consts";
import {
    addUser, getAllFeedbacks,
    getCompaniesFiles,
    getCurrentUser, getCurrentUserProfile,
    getHelpDesk, postFeedbacks,
    putCurrentUserProfile
} from "../../../http/moderatorAPI";
import {Context} from "../../../index";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";

const ProfileCard = observer(() => {
    const {user} = useContext(Context)
    const [firstName, setFirstName] = useState(toJS(user.user).firstName)
    const [middleName, setMiddleName] = useState(toJS(user.user).middleName)
    const [lastName, setLastName] = useState(toJS(user.user).lastName)
    const [email, setEmail] = useState(toJS(user.user).email)
    const [phone, setPhone] = useState(toJS(user.user).phone)
    const [file, setFile] = useState(null)
    const [img, setImg] = useState(profilePic)
    const [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate()


    const selectFile = e => {
        setFile(e.target.files[0])
        setImg(URL.createObjectURL(e.target.files[0])
        )
    }

    const saveChanges = () => {
        console.log('USER EMAIL>>>')
        console.log(toJS(user.user).email)
        const ans1 = putCurrentUserProfile(localStorage.getItem('id'),firstName,lastName,middleName,email,phone,0,'',localStorage.getItem('role'),'').then(function (response){
            const ans1 = getCurrentUserProfile(email).then(function (response){
                user.setUser(response.data)
                console.log('THIS USER from USE EFFECT>>>')
                console.log(toJS(user.user))
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
                        Load image
                    </label>


            </div>
            <div className="profile-fields-moderator">
                <div className="profile-field">
                    <h2 className="profile-field-h2">First name</h2>
                    <input type="text" id="first-name" className="profile-field-input" placeholder={user.user.firstName} required=""
                           autoFocus="" value={firstName.toString() || ''} onChange={e => setFirstName(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">Middle name</h2>
                    <input type="text" id="middle-name" className="profile-field-input" placeholder={user.user.middleName} required=""
                           autoFocus="" value={middleName.toString() || ''} onChange={e => setMiddleName(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">Last name</h2>
                    <input type="text" id="last-name" className="profile-field-input" placeholder={user.user.lastName} required=""
                           autoFocus="" value={lastName.toString() || ''} onChange={e => setLastName(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">Email</h2>
                    <input readOnly type="text" id="last-name" className="profile-field-input" placeholder={user.user.email} required=""
                           autoFocus="" value={email.toString() || ''} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">Phone</h2>
                    <input type="text" id="last-name" className="profile-field-input" placeholder={user.user.phone} required=""
                           autoFocus="" value={phone.toString() || ''} onChange={e => setPhone(e.target.value)}/>
                </div>

                    <button className="moderator-submit-profile" onClick={saveChanges}>
                        Save changes
                    </button>
                <button className="moderator-submit-profile" onClick={resetPassword}>
                    Reset password
                </button>

                </div>

        </div>
    );
});

export default ProfileCard;