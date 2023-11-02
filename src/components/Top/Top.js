import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Top.css'
import { Context } from '../context/Context'

export default function Top() {
  
  const {isFetching,dispatch,user} = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleClicked= async()=>
  { 
    try{
      dispatch({type:"LOG_OUT"});
      window.location.replace('/register');
    } catch(err)
    {
      console.log("error while loging out!");
    } 
    
    
  }

  return (
   
    <div className='header'>
      <div className="leftcontent">
        <i className="topIcon fab fa-facebook-square icons"></i>
        <i className="topIcon fab fa-twitter-square icons"></i>
        <i className="topIcon fab fa-pinterest-square icons"></i>
        <i className="topIcon fab fa-instagram-square icons"></i>
      </div>
      <div className="centercontent">
        <ul className="items">
          <li className="itemlist">
          <Link to ='/' style={{textDecoration:"none",color:'black'}}>HOME</Link></li>
          <li className="itemlist"><Link style={{textDecoration:"none",color:'black'}}>ABOUT</Link></li>
          <li className="itemlist"><Link style={{textDecoration:"none",color:'black'}}>CONTACT</Link></li>
          
          {user&&(<><li className="itemlist"><Link to ='/write' style={{textDecoration:"none",color:'black'}}>WRITE</Link></li>
          <li className="itemlist">
          <Link style={{textDecoration:"none",color:'black'}} onClick={handleClicked}>
           LOGOUT
          </Link>
          </li></>)}
          
        </ul>
      </div>
      <div className="rightcontent">
        <ul className="rc">
        {user&&(<li className="rcprofile">
        <Link to ='/setting' style={{textDecoration:"none",color:'black'}}><img className="rcprofile" src={PF+user.profilePic} alt="pic"/></Link>  
        </li>)}
         <li className="rcsearch">
         <i class="fa-solid fa-magnifying-glass"></i>
         </li>
         {!user&&(
          <>
            <li><button style={{color:'white',backgroundColor:'teal',padding:'7px',border:'none',borderRadius:'7px'}}>
            <Link to='/register' className='link' style={{color:'white'}}>Register</Link></button></li>
            <li><button style={{color:'white',backgroundColor:'tomato',padding:'7px',border:'none',borderRadius:'7px'}}>
            <Link to='/login' className='link' style={{color:'white'}}>LogIn</Link></button></li>
          </>
        )}
        </ul>
      </div>
    </div>
  
  )
}
