/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './style/sidebar.css';
import { NavLink} from 'react-router-dom';

const Sidebar=()=>{

    const [visible,setVisible]=useState(false);

    const toggleSidebar=()=>{
        setVisible(visible=>!visible);
}
    return (
      <div>
          <div className="toggle-btn" onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>    
          </div>   
          <div>
          {visible?
          <div id="sidebar">
            <p>English <span>Hindi</span></p>
            <hr></hr>
            <h1>Contents</h1>
            <ul>

            <li><NavLink className="menu-items"  to='/home'>All News</NavLink></li>
            <li><NavLink className="menu-items"  to='/political'>Political</NavLink></li>
            <li><NavLink className="menu-items"  to='/science'>Science</NavLink></li>
            <li><NavLink className="menu-items"  to='/automobiles'>Automobiles</NavLink></li>
            <li><NavLink className="menu-items"  to='/bollywood'>Bollywood</NavLink></li>
            <li><NavLink className="menu-items"  to='/technologies'>Technologies</NavLink></li>
            <li><NavLink className="menu-items"  to="/startup">Start Up</NavLink></li>
            <li><NavLink className="menu-items"  to='/business'>Business</NavLink></li>
            <li><NavLink className="menu-items"  to='/sports'>Sports</NavLink></li>
            <li><NavLink className="menu-items"  to='/hollywood'>Hollywood</NavLink></li>
            <li><NavLink className="menu-items"  to='/innovation'>Innovation</NavLink></li>
            </ul>
        </div>
          :''}
        </div>
    </div>
    );
  }
export default Sidebar;

