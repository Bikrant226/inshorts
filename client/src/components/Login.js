import React, { useState } from 'react';
import './style/style.css';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
const Login=()=>{
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const loginUser=async (e)=>{
        e.preventDefault();

        const response=await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });

        const data=response.json()
        if(data.status===400 || !data){
            window.alert('Invalid Credentials');
        }else{
           window.alert('Sucessfull Login');
           history.push('/home')
        }
    }

    return(
        <React.Fragment>
        <form method="POST">
            <input type="email" value={email} placeholder="EMAIL" onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input type="password" value={password} placeholder="PASSWORD" onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
        </form>
        <button type="submit" className="submit" value='SIGNUP' onClick={loginUser}>LOGIN</button>

        <NavLink to="/signup" className="switch">Don't have an account?Please Signup</NavLink>
         </React.Fragment>
    );
}

export default Login;