import React from 'react';
import logo from "./assets/front.png";
import './style/welcome.css';

const Welcome=()=>{

    return(
        <React.Fragment>
            
            <img className="hi" src={logo} alt="no"/>
            <p className="pi">inshorts</p>
            <a id="si" href='/home'>Read</a>
        </React.Fragment>
    );        

}

export default Welcome;