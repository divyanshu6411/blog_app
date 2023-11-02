import React, { useState,useEffect } from 'react'
import './Home.css'
import frontImg from './titli.jpg'
import Post from '../../components/post/Post.js'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from "axios";
import { useLocation } from 'react-router-dom'



export default function Home() {
  
  
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();


  useEffect(() => {
    
    axios.get('http://localhost:5000/api/post'+search).then(response => {
       setPosts(response.data);
    }).catch(err=> console.log(err));
     
  }, [search]);


  return (
    <>
    <div className='Home'>
      <div className="title">
        <div className="headtitle">Insightful Blog</div>
        <div className="subtitle">BLOG</div>
        </div>
      
      <div className="mainimage">
       <img className="pic" src ={frontImg} alt="mainimg" />
       </div>
    </div>
     <div className="contentBottom">
      <div className="postcontent"><Post post={posts}/></div>
      <div className="sidebarcontent"><Sidebar/></div>
     </div>
    </>
  )
}
