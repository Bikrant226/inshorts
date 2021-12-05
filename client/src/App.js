import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './components/style/navbar.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Home from './components/Home';
import './components/style/app.css'
const App=()=>{

    return(
        <>
        <Navbar/>
        <Switch>
        <div className="parent">   
           
            <div className="nav1" >
                <Sidebar/>
            </div>
            <div className="nav2">
                <Route exact path='/' component={Welcome}/>
                <Route path="/home">
                    <Home/> 
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>
            </div>            
        </div>
        </Switch>
       </>
       
    );
}

export default App;