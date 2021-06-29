import React, { useEffect, useState } from 'react';
import './style/content.css';
import i from './assets/news2.jpg';
const Home=()=>{

    const [news,setNews]=useState([]);
    
    useEffect(()=>{
        const callHome=async()=>{

            await fetch('/home')
            .then(res=>res.json())
            .then(data=>{
                //console.log(data);
                
                setNews(data)})
            .catch(err=>console.log(err))
        }
        callHome();
    },[]);

    console.log(news)
    // news.map((e)=>{
    //   console.log(e.heading)
    // })
  
    return(
        <div className="parent">
            {news.map((e)=>(
                <div className="news">
                    <img src={i} alt="hello"/>
                        <div className="content">
                            <p className="heading" key={e._id}>{e.heading}</p>
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