import React, {useState} from 'react';
import profilePic from "../../../UI/account_img.jpg";
import {useNavigate} from "react-router";
import {AUTH_ROUTE, MANAGER_MAIN_ROUTE, PASSWORD_RESET_ROUTE} from "../../../utils/consts";

const ProfileCard = ({user}) => {
    const [firstName, setFirstName] = useState(user.user.firstName)
    const [middleName, setMiddleName] = useState(user.user.middleName)
    const [lastName, setLastName] = useState(user.user.lastName)
    const [email, setEmail] = useState(user.user.email)
    const [phone, setPhone] = useState(user.user.phone)
    const [file, setFile] = useState(null)
    const [img, setImg] = useState(profilePic)
    const [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate()


    const selectFile = e => {
        setFile(e.target.files[0])
        setImg(URL.createObjectURL(e.target.files[0])
        )
    }

    const resetPassword = () => {
        //сбросить токен
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
                           autoFocus="" value={firstName || ''} onChange={e => setFirstName(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">Middle name</h2>
                    <input type="text" id="middle-name" className="profile-field-input" placeholder={user.user.middleName} required=""
                           autoFocus="" value={middleName || ''} onChange={e => setMiddleName(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">Last name</h2>
                    <input type="text" id="last-name" className="profile-field-input" placeholder={user.user.lastName} required=""
                           autoFocus="" value={lastName || ''} onChange={e => setLastName(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">Email</h2>
                    <input type="text" id="last-name" className="profile-field-input" placeholder={user.user.email} required=""
                           autoFocus="" value={email || ''} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="profile-field">
                    <h2 className="profile-field-h2">Phone</h2>
                    <input type="text" id="last-name" className="profile-field-input" placeholder={user.user.phone} required=""
                           autoFocus="" value={phone || ''} onChange={e => setPhone(e.target.value)}/>
                </div>

                    <button className="moderator-submit-profile">
                        Save changes
                    </button>
                <button className="moderator-submit-profile" onClick={resetPassword}>
                    Reset password
                </button>

                </div>

        </div>
    );
};

export default ProfileCard;