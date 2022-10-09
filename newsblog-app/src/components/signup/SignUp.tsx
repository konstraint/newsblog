import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MIN_PWD_LENGTH } from "../../constants";
import { useInput } from "../../hooks";
import { signup } from "../../redux/action_creators";
import { StoreState } from "../../redux/storeTypes";
import './SignUp.scss';

const SignUp = () => {
    const username = useInput('username', '', {'isEmpty': true});
    const email = useInput('email', '', {'isEmpty': true, 'isEmail': true});
    const password = useInput('password', '', {'isEmpty': true, 'minLengthErr': MIN_PWD_LENGTH});
    const confirmPassword = useInput('confirmPassword', '', {'isEmpty': true, 'confirmPwd': password.value});

    const dispatch = useDispatch();
    const onSignUp = () => {
        dispatch(signup({
            username: username.value,
            email: email.value,
            password: password.value,
        }));
    };

    const signUpErrors = useSelector((state: StoreState) => state.signUpErrors.signUpErrors);

    return (
        <div className="sign-up-container">
            <h2 className="sign-up-container-title">Sign Up</h2>
            <div>
                { 
                    signUpErrors !== undefined && 
                    signUpErrors.length > 0 && 
                    signUpErrors.map((err, index) => <span key={index} style={{color: 'red'}}>{err}</span>)
                }            
            </div>
            <div className="sign-up-block">
                <div className="sign-up-block-content">
                    <label> 
                        Username
                        <input onChange={(e) => username.onChange(e)}  name="username" className="sign-up-block-el" type="text" placeholder="Username" value={username.value}></input>
                        {username.valid && <div style={{color: 'red'}}>{username.valid}</div>}
                    </label>
                </div>
                <div className="sign-up-block-content">
                    <label>
                        Email
                        <input onChange={(e) => email.onChange(e)} name="email" className="sign-up-block-el" type="email" placeholder="Email" value={email.value}></input>
                        {email.valid && <div style={{color: 'red'}}>{email.valid}</div>}
                    </label>
                </div>
                <div className="sign-up-block-content">
                    <label>
                        Password
                        <input onChange={(e) => password.onChange(e)} name="password" className="sign-up-block-el" type="password" placeholder="Password" value={password.value}></input>
                        {password.valid && <div style={{color: 'red'}}>{password.valid}</div>}
                    </label>
                </div>
                <div className="sign-up-block-content">
                    <label>
                        Confirm Password
                        <input onChange={(e) => confirmPassword.onChange(e)} name="confirm-password" className="sign-up-block-el" type="password" placeholder="Confirm password" value={confirmPassword.value}></input>
                        {confirmPassword.valid && <div style={{color: 'red'}}>{confirmPassword.valid}</div>}
                    </label>
                </div>   
                <button className="sign-up-block-btn-sign-up" 
                        disabled={!!username.valid || !!email.valid || !!password.valid || !!confirmPassword.valid}
                        onClick={onSignUp}>
                    Sign Up
                </button>
                <div>
                    <span>Already have an account?<Link to="/signin">Sing In</Link></span>
                </div>
                
            </div>
        </div>
    );
};

export { SignUp };