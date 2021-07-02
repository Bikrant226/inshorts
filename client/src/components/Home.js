import React, { useEffect, useState } from 'react';
import './style/content.css';
//import './style/app.css';
import logo from './assets/icon.png'

const Home=()=>{

    const [news,setNews]=useState([]);
    
    
        const callHome=async()=>{
            await fetch('/home')
            .then(res=>res.json())
            .then(data=>{
                setNews(data)})
            .catch(err=>console.log(err))
        }
        callHome();

    return( 
        <div className="parents">
            {news.map((e)=>(
                <div className="news" key={e._id}>
                    <img src={logo} alt="image"/>
                        <div className="content">
                            <p className="heading">{e.heading}</p>
                            <p className='author'>short <span>by {e.author} {e.timestamp}</span></p>                
                            <p className="desc">{e.desc}</p>
                            <span className="link">read more at <a href={e.link} target="_blank" rel="noreferrer">{e.linkname}</a> </span>  
                        </div>
                    
                </div>
            ))}
        </div>
            // {
           
            //  news.map((e)=>  
            //     <p className="para" key={e._id}>
            //         {e.heading}{e.timestamp}
            //         <br/>
            //         {e.author}
            //         <br/>
            //         {e.desc}
            //         <br/>
            //         {e.link}
            //     </p>
            //  )}

        
    );
    
}

export default Home;