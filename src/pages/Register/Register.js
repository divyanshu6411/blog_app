
import React, { useState } from 'react'
import pic from '../../components/post/pexels-min-an-1310182.jpg'
import './Register.css'
import axios from 'axios';

export default function Register() {
  
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [email,setEmail]= useState();
  const [err,setErr] = useState();

  const handleSubmission = async(e)=>
  {
    setErr(false);
    e.preventDefault();
    try{
         const res = await axios.post('http://localhost:5000/api/auth/register',{
          username:username,
          password:password,
          email:email
         });
        // console.log(res.data);
        res.data && window.location.replace('/login');
    }
    catch(err)
    {
        setErr (true);
    }
  }

  return (
    <div className="registerwrapper">
    <div className='register'>
      <div className="rgcontent">
        <div className="rgheader">Blogging Community</div>
        <div className="rgsubheader">The faster you fill up faster you read blogs</div>
        <form className="rgform" onSubmit={handleSubmission}>
            <label htmlFor="rgname" >Username</label>
            <input type="text" id="rgname" placeholder='Enter your name' 
              onChange={e=> setUsername(e.target.value)}
            />
            <label htmlFor="rgemail" >Email</label>
            <input type="email" id="rgemail" placeholder='Enter your email' 
            onChange={e=> setEmail(e.target.value)} />
            <label htmlFor="rgpassword">Password</label>
            <input type="password" id="rgpassword" placeholder='Enter password' 
              onChange={e=> setPassword(e.target.value)}
            />
            <button className="rgbutton" type="submit">Sign Up</button>
            {err&&(<snap style={{color:'red'}}>Something went Wrong!</snap>)}
        </form>
      </div>
      <div className="rgimg">
        <img src={pic} alt="" className="rgpic" />
      </div>
    </div>
    </div>
  )
}
