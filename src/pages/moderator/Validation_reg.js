import React from 'react';
import {sendReset} from "../../http/userAPI";
import {AUTH_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router";

const ValidationReg = () => {
    let navigate = useNavigate()

    const sign_in_nav = () => {
        navigate(AUTH_ROUTE)
    }

    return (
        <div className="reg-main-back">
            <div className="password-reset-main">
                <div className="password-reset-header">
                    <h1 className="password-reset-header-h1">PUBLIC TRANSPORT</h1>
                </div>

                <div className="password-reset-form">
                    <div className="padds"> </div>
                    <div className="password-reset-form-control">
                        <h2 className="password-reset-form-control-h2-validate" style={{fontSize: '20px'}}>Please, validate your account. Look for the verification email in your inbox and click the link in that email. </h2>


                    </div>

                    <div className="password-reset-form-control">
                        <button className="password-reset-form-button" onClick={sign_in_nav}>
                            Sign in
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ValidationReg;