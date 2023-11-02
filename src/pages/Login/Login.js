
import React,{useContext, useRef, useState} from 'react'
import pic from '../../components/post/pexels-min-an-1310182.jpg'
import './Login.css';
import { Context } from '../../components/context/Context';
import axios from 'axios';



export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {isFetching,dispatch} = useContext(Context); 
  const [err,setErr] =useState(false);

  const handleSubmission=(async(e)=>
  {
     e.preventDefault();
     dispatch({type:'LOGIN_START'});
     try{
           const res = await axios.post('http://localhost:5000/api/auth/login',{
            username:userRef.current.value,
            password:passwordRef.current.value,
           });
           console.log(res.data);
           dispatch({type:"LOGIN_SUCCESS",payload:res.data});
           res.data && window.location.replace('/');
     }catch(err)
    {    setErr(true);
         dispatch({type:"LOGIN_FAILURE"});
    }
  });
  
  // console.log(isFetching);
  return (
    <div className="loginwrapper">
    <div className='login'>
      <div className="lgcontent">
        <div className="lgheader">Welcome Back</div>
        <div className="lgsubheader">The faster you fill up faster you read blogs</div>
        <form className="lgform" onSubmit={handleSubmission}>
            <label htmlFor="lgemail" >Username</label>
            <input type="text" id="lgemail" placeholder='Enter your name' ref={(userRef)}/>
            <label htmlFor="lgpassword">Password</label>
            <input type="password" id="lgpassword" placeholder='Enter password' ref={(passwordRef)}/>
            <button className="lgbutton" type='submit' disabled={isFetching}>Sign In</button>
            {err&&(<div style={{marginTop:'10px',color:"red",alignSelf:"center"}}>Credentials are Wrong!</div>)}
        </form>
      </div>
      <div className="lgimg">
        <img src={pic} alt="" className="lgpic" />
      </div>
    </div>
    </div>
  )
}
