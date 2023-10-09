import React, { useState } from 'react';
import logo from '../images/LasBite.png';
import i from '../images/Intersect.png';
import './login.css';


const ForgetPassword = () => {

    //  create and return the login form
    return (
        <div className="body">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="Form">
                    <form onSubmit="">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                        <button>Continue</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;