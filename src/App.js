import React from 'react';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './components/Login';
import Mainpage from './components/Main';
import './App.css';

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? <Mainpage/> : <Login/>}
    </>
  );
}
  
export default App;