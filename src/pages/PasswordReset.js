import React, {useState} from 'react';
import '../styles/styles_for_pages/Authorization.css'
import {sendReset} from "../http/userAPI";

const PasswordReset = () => {
    const [email, setEmail] = useState('')
    const sendResetPass = async () => {
        if (!(email==='')) {
            const res = sendReset(email).then(function (response){
                console.log('SEND RESET>>>')
                console.log(response)
            })
        }
    }

    return (
        <div className="password-reset-main">
            <div className="password-reset-header">
                <h1 className="password-reset-header-h1">PUBLIC TRANSPORT</h1>
            </div>

            <div className="password-reset-form">
                <div className="padds"> </div>
                <div className="password-reset-form-control">
                    <h2 className="password-reset-form-control-h2">Enter your email address</h2>
                    <input type="email" id="inputEmail" className="password-reset-form-control-input" placeholder="" required=""
                           autoFocus="" value={email || ''} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="password-reset-form-control">
                    <button className="password-reset-form-button" onClick={sendResetPass}>
                        Send the link
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PasswordReset;