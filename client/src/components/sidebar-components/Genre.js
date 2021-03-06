import React, { useEffect, useState } from 'react';
import '../style/content.css';
import logo from '../assets/icon.png'

const Genre=(props)=>{

    const [news,setNews]=useState([]);

    return( 
        <div className="parents">
            {news.map((e)=>(
                <div className="news" key={e._id}>
                    <img src={logo} alt="news"/>
                        <div className="content">
                            <p className="heading">{e.heading}</p>
                            <p className='author'>short <span>by {e.author} {e.timestamp}</span></p>                
                            <p className="desc">{e.desc}</p>
                            <span className="link">read more at <a href={e.link} target="_blank" rel="noreferrer">{e.linkname}</a> </span>  
                        </div>
                    
                </div>
            ))}
        </div>        
    );
    
}

export default Genre