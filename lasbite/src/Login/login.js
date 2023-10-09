import React, { useState } from 'react';
import logo from '../images/LasBite.png';
import g from '../images/google.png';
import f from '../images/facebook.png';
import './login.css';


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
        <div className="body">
            <div className='circle'>
                <div className='circle1'></div>
                <div className='circle2'></div>
            </div>
            <div className='container'>
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
                    <button>
                        <img src={g} alt="google" />
                        Google</button>
                    <button>
                        <img src={f} alt="facebook" />
                        Facebook</button>
                </div>
                <div className="Register">
                    <p>Don't have an account? <span>Register</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login;
