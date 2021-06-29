import React, { useEffect, useState } from 'react';

const About=()=>{

    const [userData,setUserData]=useState('')




    useEffect(()=>{
        const callAbout=async()=>{
            try{
                const response= await fetch('/about',{
                    method:'GET',
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json",
                        
                    },
                    credentials:"include"
                });
    
                const data=await response.json();
                // console.log(data);
                setUserData(data);
    
                if(!response.status===200){
                    const error=new Error(response.error);
                    throw error;
                }
    
            }catch(err){
                console.log(err);
            }
        }
        callAbout();
    },[])
    return(
        <div>
        <p>{userData.name}</p>
        <p>{userData.phone}</p>
        <p>{userData.email}</p>
        <p>{userData.work}</p>
       
        </div>
        
    );
}

export default About;