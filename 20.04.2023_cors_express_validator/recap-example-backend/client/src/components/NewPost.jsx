import React, {useState} from 'react';
import axios from 'axios';

export default function NewPost() {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Sending information to the server");
      //setting up our data to add to the body of our request.
      const data = {
        title:title,
        content:content
      }

      //making post request to the create endpoint 
      //add data as second parameter
      const res = await axios.post('http://localhost:4000/api/posts/create',data);

      if(res.status === 201){
        console.log("Yaay we added a new post");
      }

   }

  return (
    <form onSubmit={e => {handleSubmit(e)}}>
       <label>Title:</label>
       <br />
       <input 
         name='title' 
         type='text'
         value={title}
         onChange={e => setTitle(e.target.value)}
       />
       <br/>
       <label>Content:</label>
       <br />
       <input 
         name='content' 
         type='text' 
         value={content}
         onChange={e => setContent(e.target.value)}
       />
       <br />
       <input 
         type='submit' 
         value='Add Post' 
       />
     </form>
  )
}
