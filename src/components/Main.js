import React, {useState} from 'react';
import { auth } from '../firebase'; 
import InputShortner from './InputShortner'; 
import BackgroundAnimate from './BackgroundAnimate';
import LinkResult from './LinkResult';
import { Link, useNavigate } from 'react-router-dom';


const Mainpage = () => {
    const navigate = useNavigate()
    async function handleLogout() {
        await auth.signOut();
      
        navigate("/");
      }
    const [inputValue, setInputValue] = useState("");
    const setval = (val) => {
        setInputValue(val)
    };
    return (
        <> 
            <h4><Link to='/contact'>Contact us</Link></h4>
            <h4><Link to='/about'> About us</Link></h4>
            <div className="container">
                <h1>Hello! {localStorage.getItem("name")}</h1>
                {/* <InputShortner setInputValue={setInputValue} /> */}
                <InputShortner onSetVal={setval}/>
                <BackgroundAnimate />
                <LinkResult inputValue={inputValue} />
            </div>
            <div className='container'>
                <button className='button' onClick={handleLogout}>Logout</button>
            </div>
            
        </>
    );
}
  
export default Mainpage;