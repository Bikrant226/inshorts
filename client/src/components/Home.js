import React, { useEffect, useState } from 'react';
import './style/content.css';
import axios from 'axios';


const Home=()=>{

    const [news,setNews]=useState([]);

    useEffect(()=>{
        axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=33953ea6693940a4aea56f846ba9d508')
                .then(res=>{
                    setNews(res.data.articles)
                    console.log(res.data.articles)
                })
                .catch(err=>console.log(err))   
    },[])
    
     

    return( 
        <div className="parents">
            {news.map((e)=>(
                <div className="news" key={e._id}>
                    <img src={e.urlToImage} alt="news"/>
                        <div className="content">
                            <p className="heading">{e.title}</p>
                            <p className='author'>short <span>by {e.author}</span></p>                
                            <p className="desc">{e.description}</p>
                            <span className="link">read more at <a href={e.url} target="_blank" rel="noreferrer">{e.source.name}</a> </span>  
                        </div>
                    
                </div>
            ))}
        </div>
           
    );
    
}

export default Home;