import React from 'react';
import './style/navbar.css';
import { NavLink} from 'react-router-dom';
const Navbar=()=>{
    return(
        <div className="navbar">
           
            <div className="one">
                <span id="i">inshorts</span>
                <br/>
                <span id="j">stay informed</span>
            </div>
            <div className="links">
                <li><NavLink id="li" to='/home'>Read</NavLink></li>
                <li><NavLink id="li" to='/login'>Login</NavLink></li>
                <li><NavLink id="li" to='/signup'>Register</NavLink></li>    
            </div>
            
        </div>
    )
}

export default Navbar;