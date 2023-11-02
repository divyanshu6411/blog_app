import React, { useContext, useState } from 'react'
import './Setting.css'
import profile from '../../components/post/pexels-min-an-1310182.jpg';
import Sidebar from '../../components/sidebar/Sidebar';
import {Context} from '../../components/context/Context.jsx';
import  axios from 'axios';

export default function Setting() {

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [success,setSucess] = useState(false); 
  const {user,dispatch} = useContext(Context);
  const [file,setFile] = useState(null);
   
  const PF = "http://localhost:5000/images/";

  const handleUpdate = async(e)=>
  {   
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const newUser ={
      userId:user._id,
      username:username,
      email:email,
      password:password,
    };
    // console.log(user);
    if(file)
    {
      
       const data = new FormData();
       const filename = Date.now()+file.name;
       data.append('name',filename);
       data.append('file',file);
       newUser.profilePic=filename;
       try
       {
         await axios.post('http://localhost:5000/api/upload',data);
         
      }catch(err){
        console.log("error while uploading!");
      }
    }
        try{
           const res = await axios.put(`http://localhost:5000/api/user/${user._id}`,newUser)
           setSucess(true);
           dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        }catch(err)
        {
          dispatch({ type: "UPDATE_FAILURE" });
          console.log("err while updating in Settings");
        }
  }


  return (
    <div className='setting'>
    <div className="settingwrapper">
     <div className="settingtitle">
        <span className="stupdate">Update Your Account</span>
        <span className="stdelete">Delete Account</span>
     </div>
     <div className="stform">
        <form  className="stcontent" onSubmit={handleUpdate}>
            <lable className="stpp">Profile Picture</lable>
            <div className="stprofile">
            <img src={file?URL.createObjectURL(file):PF+user.profilePic} alt="profile pic" className="stpic" />
            <label htmlFor='sticon'>
            <i className="sticon settingsPPIcon far fa-user-circle"></i>
            </label>
            <input id="sticon" type="file" style={{display:"none"}}
            onChange={(e)=>setFile(e.target.files[0])}
            ></input>
            </div>
            <label htmlFor="stusername" >UserName</label>
             <input type="text" id="stusername" placeholder='aman' onChange={(e)=>setUsername(e.target.value)} />
             <label htmlFor="stemail" >Email</label>
             <input type="email" id="stemail" placeholder='aman@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
             <label htmlFor="stpassword" >Password</label>
             <input type="password" id="stpassword" placeholder='abc123'   onChange={(e)=>setPassword(e.target.value)}/>
             <button className="stbutton" type="submit">Update</button>
             {success&&(<div style={{marginTop:'10px',color:"red",alignSelf:"center"}}>User Information is Updated...</div>)}
        </form>
     </div>
    </div>
    <Sidebar/>
    </div>
  )
}
