import React from 'react';
import { useState } from "react"
import { useHistory } from 'react-router';
const Post=()=>{
    const [news,setNews]=useState({
        heading:"",
        author:"",
        desc:"",
        link:"",    
        linkname:"",
        genre:""
        
    })

    let x,val;
    const history=useHistory();

    const handleInputs=(e)=>{
        x=e.target.name;
        val=e.target.value;
        setNews({...news,[x]:val})
    }  

        //sending data to backend
    const submitData=async(e)=>{
        e.preventDefault();
        const {heading,author,desc,link,linkname,genre}=news;
         const response=await fetch('/home',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    heading,author,desc,link,linkname,genre
                })
             });
    
             

            const data=await response.json()
            
             if(data.status===422 || !data){
                 window.alert('Error in posting data');
             }else{
                window.alert('Sucessfully posted');
                history.push('/home');
             }
        }
    

    return(
        <React.Fragment>
            <form method="POST">
            <input type="text" name="heading" placeholder="HEADING" value={news.heading} onChange={handleInputs} />
            <br/>
            <input type="text" name="author" placeholder="AUTHOR" value={news.author} onChange={handleInputs}/>
            <br/>
            <input type="text-area" name="desc" placeholder="DESCRIPTION" value={news.desc} onChange={handleInputs}/>
            <br/>
            <input type="text" name="link" placeholder="LINK" value={news.link} onChange={handleInputs}/>
            <br/>
            <input type="text" name="linkname" placeholder="LINKTEXT" value={news.linkname} onChange={handleInputs}/>
            <br/>
            <input type="text" name="genre" placeholder="GENRE" value={news.genre} onChange={handleInputs}/>
            <br/>            
            </form>
            <button type="submit" className="submit" value='POST' onClick={submitData}>POST NEWS</button>
        </React.Fragment>
    );
}


export default Post;