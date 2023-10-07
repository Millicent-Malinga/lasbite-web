import React, { } from 'react';
import {auth} from '../Login/config';
import { useNavigate } from 'react-router-dom';

function Home() {
    const user = auth.currentUser;
    const navigate = useNavigate();
    if (!user){
        navigate('/');
    }
    const SignOut = () => {
        auth.signOut();
        navigate('/');
    }
    
  return (
    <div className="App">
        <h1>Home Page</h1>
        <p> Current User: {user.displayName}  </p>
        <button onClick={SignOut}>Sign Out</button>
    </div>
  );
}

export default Home;