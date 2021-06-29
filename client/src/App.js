import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './components/style/navbar.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Post from './components/Post';
const App=()=>{

    return(
        <div>
            
            <Navbar/>
            <Route path="/home">
                <Home/> 
            </Route>
            <Route path="/post">
                <Post/> 
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/signup">
                <Signup/>
            
            </Route>            
            
        </div>
    );
}

export default App;