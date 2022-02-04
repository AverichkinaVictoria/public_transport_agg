import React from 'react';
import '../styles/styles_for_pages/PasswordResetChange.css'

const PasswordResetChange = () => {
    return (
        <div className="password-reset-change-main">
            <div className="password-reset-change-header">
                <h1 className="password-reset-change-header-h1">PUBLIC TRANSPORT</h1>
            </div>

            <div className="password-reset-change-form">
                <div className="padds"> </div>
                <div className="password-reset-change-form-control">
                    <h2 className="password-reset-change-form-control-h2">New password</h2>
                    <input type="password" id="inputPassword1" className="password-reset-change-form-control-input" placeholder="" required=""
                           autoFocus="" />
                </div>

                <div className="password-reset-change-form-control">
                    <h2 className="password-reset-change-form-control-h2">Re-enter the new password</h2>
                    <input type="password" id="inputPassword2" className="password-reset-change-form-control-input" placeholder="" required=""
                           autoFocus="" />
                </div>

                <div className="password-reset-change-form-control">
                    <button className="password-reset-change-form-button">
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PasswordResetChange;