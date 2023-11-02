import React, { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios';
import pics from '../2120.jpg'
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
   
   const [cat,setCat] = useState([]);
  

   useEffect(()=>
   {
    axios.get('http://localhost:5000/api/cat').then((res)=>{setCat(res.data);}).catch(err=>console.log(err));
   }
   ,[]);
   

  return (
    <div className='sidebar'>
      <div className="titlesidebar"> ABOUT ME</div>
      <div className="sidebarimage"><img src={pics}/></div>
      <div className="sidebardecs">Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.</div>
      <div className="cateogry">
       <div className="name">CATEGORIES</div>
        <ul className='itemssidebar'>
            {cat.map((i,j)=>(<li key={j} className="listitem"><Link className='link' style={{color:"black"}} to={`/?cat=${i.name}`}>{i.name}</Link></li>))}
        </ul>
      </div>
      <div className='followtitle'>FOLLOW US</div>
      <div className="sidebarIcon">
      <i className="topIcon fab fa-facebook-square icons"></i>
        <i className="topIcon fab fa-twitter-square icons"></i>
        <i className="topIcon fab fa-pinterest-square icons"></i>
        <i className="topIcon fab fa-instagram-square icons"></i>
      </div>
    </div>
  )
}
