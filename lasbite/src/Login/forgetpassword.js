import React, { useState } from 'react';
import logo from '../images/LasBite.png';
import i from '../images/Intersect.png';
import './login.css';


const ForgetPassword = () => {

    //  create and return the login form
    return (
        <div className="container">
            <div className="d">
                <img src={i} alt="intersect" />
                <div className="d1">Forgot Password?</div>
                <div className="d2">Enter your email address to reset password</div>
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="Form">
                <form onSubmit="">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                    <button>Continue</button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword;