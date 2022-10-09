import React from "react";
import { MIN_PWD_LENGTH } from "../../constants";
import { useInput } from "../../hooks";
import './SignIn.scss';

const SignIn = () => {
    const email = useInput('email', '', {'isEmpty': true, 'isEmail': true});
    const password = useInput('password', '', {'isEmpty': true, 'minLengthErr': MIN_PWD_LENGTH});    
    return (
        <div className="sign-in-container">
            <h2 className="sign-in-container-title">Sign In</h2>
            <form className="sign-in-block">
                <div className="sign-in-block-content">
                    <label>
                        Email
                        <input onChange={(e) => email.onChange(e)} name="email" className="sign-up-block-el" type="email" placeholder="Email" value={email.value}></input>
                        {email.valid && <div style={{color: 'red'}}>{email.valid}</div>}
                    </label>
                </div>
                <div className="sign-in-block-content">
                    <label>
                        Password
                        <input onChange={(e) => password.onChange(e)} name="password" className="sign-up-block-el" type="password" placeholder="Password" value={password.value}></input>
                        {password.valid && <div style={{color: 'red'}}>{password.valid}</div>}
                    </label>
                </div>  
                <button className="sign-in-block-btn-sign-in" 
                        disabled={!!email.valid || !!password.valid}>
                    Sign In
                </button>
            </form>
        </div>
    )
};

export { SignIn };