import React, { useContext, useState } from 'react'
import './Write.css'
import axios from 'axios'
import { Context } from '../../components/context/Context.jsx';



export default function Write() {

  
  const [desc,setDesc] = useState("");
  const [title,setTitle] = useState("");
  const [file,setFile] = useState(null);
  const {user} = useContext(Context);

   const handleSubmission = async(e)=>
   { 
    e.preventDefault();
    // console.log(user);
    
      const newPost = {
        username:user.username,
        title:title,
        desc:desc,
       
      }
      if(file)
      {
        const data = new FormData();
        const filename = Date.now()+file.name;
        data.append("name",filename);
        data.append("file",file);
        newPost.photo = filename;
        try{
           await axios.post("http://localhost:5000/api/upload",data);
        }catch(err)
        {
          console.log("not properly upload images");
        }
      }
      try{
          const res = await axios.post('http://localhost:5000/api/post',newPost);
          // console.log(res.data);
          window.location.replace('/read/'+res.data._id);
      }catch(err)
      {
         console.log(err);
      }
   }

  return (
    <div className='Write'>
          <form  className="wrcontent" onSubmit={handleSubmission}>
            {file&&(<img src={URL.createObjectURL(file)} alt="" className="wrpic" />)}
            <div className='wrheader'>
           <label htmlFor='wrfile'>
           <i className="fa-sharp fa-solid fa-plus wraddicon"></i>
           </label>
           <input type="file" id="wrfile" className='wrfileh'
            onChange={(e)=> setFile(e.target.files[0])}
            />
           <input 
           type="text" className="wrtitle" placeholder="Title" autoFocus={true} 
           onChange={(e)=> setTitle(e.target.value)}
           />
           </div>
           <div className="wrtextarea">
           <textarea className="wrdesc" placeholder="Tell your Story"
            onChange={(e)=> setDesc(e.target.value)}
           ></textarea>
           </div>
           <button className="wrpublish" type="submit" style={{cursor:"pointer"}}>Publish</button>
          </form>
    </div>
  )
}


