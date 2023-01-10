import React, {useState} from 'react';
import { auth } from '../firebase'; 
import InputShortner from './InputShortner'; 
import BackgroundAnimate from './BackgroundAnimate';
import LinkResult from './LinkResult';
const Mainpage = () => {
    const [inputValue, setInputValue] = useState("");
    const setval = (val) => {
        setInputValue(val)
    };
    return (
        <> 
            <div className="container">
                {/* <InputShortner setInputValue={setInputValue} /> */}
                <InputShortner onSetVal={setval}/>
                <BackgroundAnimate />
                <LinkResult inputValue={inputValue} />
            </div>
            <div className='container'>
                <button className='button' onClick={()=>{auth.signOut()}}>Logout</button>
            </div>
            
        </>
    );
}
  
export default Mainpage;