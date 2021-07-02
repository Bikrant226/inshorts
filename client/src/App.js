import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './components/style/navbar.css';
import About from './components/About';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Signup from './components/Signup';
import Post from './components/Post';
import Welcome from './components/Welcome';
import Routes from './components/Routes';
import './components/style/app.css'
const App=()=>{

    return(
        <React.Fragment>
        <Navbar/>
        <Switch>
        <div className="parent">   
           
            <div className="nav1" >
            <Sidebar/>
            </div>
            <div className="nav2">
            <Route exact path='/' component={Welcome}/>
            <Routes/>
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
        </div>
        </Switch>
        </React.Fragment>
       
    );
}

export default App;