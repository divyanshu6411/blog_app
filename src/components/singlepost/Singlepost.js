import React,{useState,useEffect, useContext} from 'react'
import './Singlepost.css'
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom'
import { Context } from '../context/Context';


export default function Singlepost() {
  
  const [post,setPost] = useState({});
  const [path,setPath] = useState(null);
  const [modified,setModified] = useState(false);
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const data = useLocation();
  const PF = "http://localhost:5000/images/"; 
  const {user}  = useContext(Context);
  

   const handleDelete = async(e)=>
   {  e.preventDefault();
      try{
          const res = await  axios.delete(`http://localhost:5000/api/post/${post._id}`,{
            data:{
              username:user.username
            }
          });
          console.log(res);
          window.location.replace('/');
      }catch(err)
      {
        console.log("something went wrong in deletion!")
      }
   }

   const handleUpdate = async(e)=>
   {  e.preventDefault();
     
      try{
        await axios.put(`http://localhost:5000/api/post/${post._id}`, {
          username: user.username,
          title:title,
          desc:desc,
        });
        setModified(false)
      }catch(err)
      {
         
      }
   }


  useEffect(()=>
  {
   setPath(data.pathname.split('/')[2]);
  //  console.log(path)
   const url = `http://localhost:5000/api/post/${path}`
   axios.get(url).then((res)=>{setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
  }).catch(err=>console.log(err));
  }
  ,[path]);


   console.log(PF+post.photo);
  return (
    <div className='Singlepost'>
      
      <img className="sppic" src={PF+post.photo} alt="post imgae" />
      <div className="sptitle">
       {modified?(<input type="text"  autofocus={true}
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       className="sptitlename sptitleinput"/>):(
        <div className="sptitlename">{title}</div>
       )}
     
       
       <div className="spicons">
       {post.username===user.username?(<>
       {modified?(<button onClick={handleUpdate} className='updatebutton' style={{backgroundColor:"tomato",border:'none',pading:'10px',color:'white'}}>Update</button>):(<i onClick={()=>(setModified(true))} className="fas fa-edit fs"></i>)}
       <i onClick={handleDelete} className="fa-solid fa-trash fd"></i></>):(<></>)
       }
      </div>
      </div>
       <div className="spinformation">
        <span className="spauthor">Author : <Link className='link' style={{color:'rgb(186, 158, 85)'}} to={`/?user=${post.username}`}><b >{post.username}</b></Link></span>
        <span className="sptime">{new Date(post.createdAt).toDateString()}</span>
      </div>
      {modified?(<textarea 
       value={desc}
      onChange={(e)=>setDesc(e.target.value)}
      className='spdescription spdesinput'></textarea>):(<div className="spdescription">
      {desc}
      </div>)}
      {/* {modified&&(<button onClick={handleUpdate} className='updatebutton' style={{backgroundColor:"teal",border:'none',pading:'10px',color:'white',alignSelf:"flex-end"}}>Update</button>)} */}
    </div>
  )
}
