import React from 'react';
import { auth, provider } from '../firebase.js';
import GoogleButton from 'react-google-button'
import BackgroundAnimate from './BackgroundAnimate.js';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            navigate('/home')
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
      
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
          })
          .catch((error) => {
            console.log(error);
          });
    };

    // useEffect(() => {
    //     if (user) {
    //       navigate('/');
    //     }
    //   }, [user]);
    return (
        <div>
            <center>
                <h1>Hello!</h1>
                <p>Please Login to SHORTEN your link!</p>
                <GoogleButton style={{"marginTop" : "200px"}} 
                onClick={signInWithGoogle} />
            </center>
            <BackgroundAnimate />
        </div>
    );
}
  
export default Login;