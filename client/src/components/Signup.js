import React, { useState } from 'react';
import './style/style.css';
import {NavLink,useHistory} from 'react-router-dom';

const Signup=()=>{
    const history=useHistory();
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    })

    let x,val;

    const handleInputs=(e)=>{
        x=e.target.name;
        val=e.target.value;

        setUser({...user,[x]:val})
        console.log(x,"**",val);
    }

    //sending data to backend
    const submitData=async(e)=>{
        e.preventDefault();
        const {name,email,phone,work,password,cpassword}=user;

         const response=await fetch('/register',{
             method:"POST",
             headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
         });

         
         const data= await response.json();
         console.log(data)
         if(data.status===422 || !data){
             window.alert('Invalid Registeration');
         }else{
            window.alert('Sucessfull Registeration');
            history.push('/login')
         }
    }

    return(
        <React.Fragment>
            <form method="POST">
            <input type="text" name="name" placeholder="NAME" value={user.name} onChange={handleInputs} />
            <br/>
            <input type="email" name="email" placeholder="EMAIL" value={user.email} onChange={handleInputs}/>
            <br/>
            <input type="number" name="phone" placeholder="PHONE" value={user.phone} onChange={handleInputs}/>
            <br/>
            <input type="text" name="work" placeholder="WORK" value={user.work} onChange={handleInputs}/>
            <br/>
            <input type="password" name="password" placeholder="PASSWORD" value={user.password} onChange={handleInputs}/>
            <br/>
            <input type="password" name="cpassword" placeholder="CONFIRM PASSWORD" value={user.cpassword} onChange={handleInputs}/>
            </form>
            <button type="submit" className="submit" value='SIGNUP' onClick={submitData}>SIGNUP</button>
            <NavLink to="/login" className="switch">Already have an account?Please Login</NavLink>
        </React.Fragment>
        );
}

export default Signup;  