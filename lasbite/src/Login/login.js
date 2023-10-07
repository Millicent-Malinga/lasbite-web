import React, { useState } from 'react';
import logo from '../images/LasBite.png';
import './login.css';


const Login = () => {

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
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="Form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="Username" id="username" onChange={handleEmailChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handlePasswordChange} />
                    <p>Forgot your password?</p>
                    <button>Login</button>
                </form>
            </div>
            <p>Or Login With</p>
            <div className="social">
                <button>Facebook</button>
                <button>Google</button>
            </div>
            <p>Don't have an account? <span>Sign Up</span></p>
        </div>
    )
}

export default Login;