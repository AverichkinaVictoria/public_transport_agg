import React, {useState} from 'react';
import '../styles/styles_for_pages/Registration.css'
import {registration} from "../http/userAPI";
import {MANAGER_MAIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router";


const Registration = () => {
//middleName, lastName, email, transportCompany, password
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [transportCompany, setTransportCompany] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate()

    const registration_user = async () => {
        const ch = (password2===password)
        if (ch) {
            setErrorMessage('');
            const response = await registration(firstName, middleName, lastName, email, transportCompany, password)
            console.log(response)
            console.log('smth')
            navigate(MANAGER_MAIN_ROUTE)
        } else {
            setErrorMessage('The passwords are different!');
        }
    }

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
                           autoFocus="" value={firstName || ''} onChange={e => setFirstName(e.target.value)}/>
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">Middle name</h2>
                    <input type="text" id="middle-name" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" value={middleName || ''} onChange={e => setMiddleName(e.target.value)}/>
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">Last name</h2>
                    <input type="text" id="last-name" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" value={lastName || ''} onChange={e => setLastName(e.target.value)}/>
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">Email</h2>
                    <input type="email" id="inputEmail" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" value={email || ''} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">Transport company</h2>
                    <input type="text" id="transport-company" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" value={transportCompany || ''} onChange={e => setTransportCompany(e.target.value)}/>
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">New password</h2>
                    <input type="password" id="inputPassword1" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" value={password || ''} onChange={e => setPassword(e.target.value)}/>
                </div>

                <div className="registration-form-control">
                    <h2 className="registration-form-control-h2">Re-enter the new password</h2>
                    <input type="password" id="inputPassword2" className="registration-form-control-input" placeholder="" required=""
                           autoFocus="" value={password2 || ''} onChange={e => setPassword2(e.target.value)}/>
                </div>

                <div className="registration-form-control">
                    <button className="registration-form-button"
                    onClick={registration_user}>
                        Sign up
                    </button>
                    {errorMessage && (
                        <p className="error"> {errorMessage} </p>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Registration;