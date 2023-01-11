import React from 'react';
import { signInWithGoogle } from '../firebase.js';
import GoogleButton from 'react-google-button'
import BackgroundAnimate from './BackgroundAnimate.js';
const Login = () => {
      
    return (
        <div>
            <center>
                <h1>Hello! {localStorage.getItem("name")}</h1>
                <p>Please Login to SHORTEN your link!</p>
                <GoogleButton style={{"marginTop" : "200px"}} 
                onClick={signInWithGoogle} />
            </center>
            <BackgroundAnimate />
        </div>
    );
}
  
export default Login;