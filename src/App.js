import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login';
import Mainpage from './components/Main';
import './App.css';
import Contact from './components/Contact';
import About from './components/About';
// import { auth } from './firebase';
// import {useAuthState} from 'react-firebase-hooks/auth';

const router = createBrowserRouter([
  {path: '/', element: <Login/> },
  {path:'/home', element: <Mainpage />},
  {path: '/contact', element: <Contact />},
  {path:'/about', element: <About/>}
])

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
      {/* {user ? <Mainpage/> : <Login/>} */}
      
    </>
  );
}
  
export default App;