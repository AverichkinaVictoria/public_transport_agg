import React from 'react';
import '../styles/styles_for_pages/Auth.css'

const Auth = () => {
    return (
        <div className="auth-main">
            <div className="auth-main-header">
                <h1 className="auth-main-header-h1">PUBLIC TRANSPORT</h1>
            </div>

            <div className="auth-main-form">
                <div className="padds">

                </div>
                <div className="auth-main-form-control">
                    <h2 className="auth-main-form-control-h2">Email</h2>
                    <input type="email" id="inputEmail" className="auth-main-form-control-input" placeholder="" required=""
                           autoFocus="" />
                </div>

                <div className="auth-main-form-control">
                    <h2 className="auth-main-form-control-h2">Password</h2>
                    <input type="password" id="inputPassword" className="auth-main-form-control-input" placeholder="" required=""
                           autoFocus="" />
                </div>

                <div className="auth-main-form-control-password-reg">
                    <div className="label-link-left">
                        <a href="URL" >Forgot password?</a>
                    </div>
                    <div className="label-link-right">
                        <a href="URL" >Sign up</a>
                    </div>
                </div>

                <div className="auth-main-form-control">
                    <button className="auth-main-form-button">
                        Sign in
                    </button>
                </div>





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
    );
};

export default Auth;