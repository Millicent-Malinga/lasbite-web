import React, { useState } from 'react';
import logo from '../images/LasBite.png';
import i from '../images/Intersect.png';
import './login.css';


const SignUp = () => {

    // create state variables for each input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // handle email change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // handle password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    // handle submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    //  create and return the login form
    return (
        <div className="container">
            <div className="d">
                <img src={i} alt="intersect" />
                <div className="d1">Sign Up</div>
                <div className="d2">Create your account</div>
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="Form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullname">Fullname</label>
                    <input type="fullname" id="fullname"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="confirm_password" id="confirm_password"/>
                    <button>Register</button>
                </form>
            </div>
            <div className="Register">
                <p>Already have an account? <span>Sign In</span></p>
            </div>
        </div>
    )
}

export default SignUp;