import React, {useContext, useState} from 'react';
import '../styles/styles_for_pages/Authorization.css'
import {
    MANAGER_MAIN_ROUTE,
    MANAGER_MAIN_VEHICLES_ROUTE,
    MODERATOR_MAIN_ROUTE,
    MODERATOR_MAIN_TC_ROUTE,
    PASSWORD_RESET_ROUTE,
    REGISTER_ROUTE
} from "../utils/consts";
import {Context} from "../index";
import {useHistory, useNavigate} from "react-router";
import {observer} from "mobx-react-lite";
import {check, getCurrentUser, login} from "../http/userAPI";
import {getRoutes} from "../http/transportCompanyAPI";
import registration from "./Registration";
import {addUser, getCompaniesFiles, getCurrentUserProfile, getUsersList} from "../http/moderatorAPI";
import {toJS} from "mobx";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate()

    const resetPass = () => {
        navigate(PASSWORD_RESET_ROUTE)
    }

    const register = () => {
        navigate(REGISTER_ROUTE)
    }

    const signIn = async () => {
        try {
            setErrorMessage('');
            const res = await login(email, password)
            console.log("LOGIN RES>>>")
            console.log(res)
            user.setIsAuth(true)
            const infoUserCurrent = await getCurrentUser()
            user.setRole(infoUserCurrent.data.type)

            console.log(infoUserCurrent.data)
            console.log('TYPE>>>')
            console.log(typeof parseInt(infoUserCurrent.data.id))
            //Сделать проверку на то существует ли в базе пользователь

            const ans = addUser(infoUserCurrent.data.id,'','','',infoUserCurrent.data.email,'','', infoUserCurrent.data.type,0,'').then(function (response){
                console.log(response)
                console.log('Added')
            }).catch(function(){console.log('ERROR!!!')})

            const ans1 = getCurrentUserProfile(infoUserCurrent.data.email).then(function (response){
                user.setUser(response.data)
                console.log('THIS USER>>>')
                console.log(toJS(user.user))
            })


            // user.setUser({id: 1, firstName: 'Victoria1', middleName: 'Nikolaevna', lastName: 'Averichkina', email: "test@mail.ru", phone: '+79881738499'})
            localStorage.setItem('role', infoUserCurrent.data.type)

            if (infoUserCurrent.data.type==='manager') {
                console.log('manager')
                navigate(MANAGER_MAIN_VEHICLES_ROUTE)
            } else if (infoUserCurrent.data.type==='moderator') {
                console.log('moderator')
                navigate(MODERATOR_MAIN_TC_ROUTE)
            }
        }
        catch (e) {
            console.log("ERROR>>>")

            setErrorMessage('Authorization error!');

        }


    }
    
    return (
        <div className="reg-main-back">
            <div className="auth-main">
                <div className="auth-main-header">
                    <h1>PUBLIC TRANSPORT</h1>
                </div>

                <div className="auth-main-form">
                    <div className="padds">

                    </div>
                    <div className="auth-main-form-control">
                        <h2 className="auth-main-form-control-h2">Email</h2>
                        <input type="email" id="inputEmail" className="auth-main-form-control-input" placeholder="" required=""
                               autoFocus="" value={email || ''} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="auth-main-form-control">
                        <h2 className="auth-main-form-control-h2">Password</h2>
                        <input type="password" id="inputPassword" className="auth-main-form-control-input" placeholder="" required=""
                               autoFocus="" value={password || ''} onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <div className="auth-main-form-control-password-reg">
                        <div className="label-link-left">
                            <a  className="password-a" /*href={PASSWORD_RESET_ROUTE}*/ onClick={resetPass}>Forgot password?</a>
                        </div>
                        <div className="label-link-right">
                            <a className="password-a"  /*href={REGISTER_ROUTE}*/ onClick={register}>Sign up</a>
                        </div>
                    </div>

                    <div className="auth-main-form-control">
                        <button className="auth-main-form-button" onClick={signIn}>
                            Sign in
                        </button>
                    </div>
                    {errorMessage && (
                        <p className="error"> {errorMessage} </p>
                    )}







                </div>
                {/*<form className="form-signin">*/}
                {/*    <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""*/}
                {/*         width="72" height="72">*/}
                {/*        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>*/}
                {/*        <label htmlFor="inputEmail" className="sr-only">Email address</label>*/}
                {/*        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required=""*/}
                {/*               autoFocus="">*/}
                {/*            <label htmlFor="inputPassword" className="sr-only">Password</label>*/}
                {/*            <input type="password" id="inputPassword" className="form-control" placeholder="Password"*/}
                {/*                   required="">*/}
                {/*                <div className="checkbox mb-3">*/}
                {/*                    <label>*/}

                {/*                    </label>*/}
                {/*                </div>*/}
                {/*                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>*/}
                {/*                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>*/}
                {/*</form>*/}



            </div>
        </div>

    );
});

export default Auth;