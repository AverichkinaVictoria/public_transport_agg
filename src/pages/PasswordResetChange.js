import React, {useState} from 'react';
import '../styles/styles_for_pages/Authorization.css'
import {passwordReset, sendReset} from "../http/userAPI";

const PasswordResetChange = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const ResetPass = async () => {
        if (!(email==='')&(!(password===''))) {
            const res = passwordReset(email, password).then(function (response){
                console.log('SEND RESET>>>')
                console.log(response)
            })
        }
    }

    return (
        <div className="reg-main-back">
            <div className="password-reset-change-main">
                <div className="password-reset-change-header">
                    <h1 className="password-reset-change-header-h1">PUBLIC TRANSPORT</h1>
                </div>

                <div className="password-reset-change-form">
                    <div className="padds"> </div>
                    <div className="password-reset-change-form-control">
                        <h2 className="password-reset-change-form-control-h2">New password</h2>
                        <input type="email" id="inputEmail" className="password-reset-form-control-input" placeholder="" required=""
                               autoFocus="" value={email || ''} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="password-reset-change-form-control">
                        <h2 className="password-reset-change-form-control-h2">Re-enter the new password</h2>
                        <input type="password" id="inputPassword2" className="password-reset-change-form-control-input" placeholder="" required=""
                               autoFocus="" value={password || ''} onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <div className="password-reset-change-form-control">
                        <button className="password-reset-change-form-button" onClick={ResetPass}>
                            Save
                        </button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default PasswordResetChange;