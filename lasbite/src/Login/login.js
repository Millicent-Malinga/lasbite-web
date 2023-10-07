import React, { useState } from 'react';
import logo from '../images/LasBite.png';
import g from '../images/google.png';
import f from '../images/facebook.png';
import i from '../images/Intersect.png';
import './login.css';
import {auth, provider, facebookProvider} from './config';
import { signInWithPopup } from "firebase/auth";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    // create state variables for each input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

// google sign in 
const [value, setValue] = useState('')
    const signInWithGoogle =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            // localStorage.setItem("email",data.user.email)
            navigate('/home');
        })
    }

    // useEffect(()=>{
    //     setValue(localStorage.getItem('email'))
    // }, [])
// sign in with facebook
    const signInWithFacebook =()=>{
        signInWithPopup(auth,facebookProvider).then((data)=>{
            setValue(data.user.email)
            navigate('/home');
        })
    }

    // useEffect(()=>{
    //     setValue(localStorage.getItem('email'))
    // }, [])
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
                <div className="d1">Sign in to your
Account</div>
            </div>
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
            <div className="or">
                <div className="line"></div>
                <p>Or Login With</p>
                <div className="line"></div>
            </div>
            <div className="social">
                <button>Facebook</button>
                <button>Google</button>
            </div>
        </div>
    )
}

export default Login;