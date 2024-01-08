import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EditPreviewMarkdownWindow from '../EditPreviewMarkdownWindow/EditPreviewMarkdownWindow';

export default function NewBlog() {
  const [blog,setBlog] = useState(null);
  const navigateTo = useNavigate();

  function handleTitle(e){
    setBlog((prevBlog) => ({...prevBlog, title: e.target.value}));
  }
  function handleBody(e){
    setBlog((prevBlog) => ({...prevBlog, body: e.target.value}));
  }
  function addNewBlog(){
    let data = {title: blog?.title,body: blog?.body, isPublic: false};
    fetch('http://localhost:9191/blog',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then((data)=>navigateTo(`/blog/${data.id}`))
    setBlog(null);
  }
  return (
    <>
    <EditPreviewMarkdownWindow blog={blog} handleTitle={handleTitle} handleBody={handleBody}></EditPreviewMarkdownWindow>
    <button onClick={addNewBlog} className='bg-blue-100 rounded-md h-8 w-16 ml-40'>Add</button>
    </>
  ) 
} 
