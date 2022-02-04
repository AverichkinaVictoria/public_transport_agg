import React from 'react';
import '../styles/styles_for_pages/Registration.css'

const Registration = () => {
    return (
        <div className="registration-main">
            <div className="registration-header">
                <h1 className="registration-header-h1">PUBLIC TRANSPORT</h1>
            </div>

            <div className="registration-form">
                <div className="padds"> </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">First name</h2>
                    <input type="text" id="first-name" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" />
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">Middle name</h2>
                    <input type="text" id="middle-name" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" />
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">Last name</h2>
                    <input type="text" id="last-name" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" />
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">Email</h2>
                    <input type="email" id="inputEmail" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" />
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">Transport company</h2>
                    <input type="text" id="transport-company" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" />
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">New password</h2>
                    <input type="password" id="inputPassword1" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" />
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">Re-enter the new password</h2>
                    <input type="password" id="inputPassword2" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" />
                </div>

                <div className="registration-form-control">
                    <button className="registration-form-button">
                        Sign up
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Registration;