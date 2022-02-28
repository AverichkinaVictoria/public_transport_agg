import React from 'react';
import '../styles/styles_for_pages/Authorization.css'

const PasswordReset = () => {
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
                           autoFocus="" />
                </div>

                <div className="password-reset-form-control">
                    <button className="password-reset-form-button">
                        Send the link
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PasswordReset;