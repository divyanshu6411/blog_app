import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import  './Post.css'
import { Context } from '../context/Context';



export default function Post({post}) {
   const PF = "http://localhost:5000/images/";
   const {user} = useContext(Context);
    
  return (
    <div className='content'>
        
        {post.map((item,key)=>(
          <div className="contentItem">
          <span className="itemsimage">
            <img src={PF+item.photo}/>
          </span>
          <span className="title"><Link to= {`/read/${item._id}`} style={{textDecoration:"none",color:'black'}}>{item.title}</Link></span>
          <span className="desc">
          {item.desc.length > 500 ?item.desc.substring(0, 500) + '...' :item.desc}
          </span>
          </div>
        ))}
        
    </div>
  )
}
