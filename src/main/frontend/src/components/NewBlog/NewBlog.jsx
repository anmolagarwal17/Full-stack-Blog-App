import { useState } from 'react'
import Markdown from 'react-markdown'
import { useNavigate } from 'react-router-dom';

export default function NewBlog() {
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");
  const navigateTo = useNavigate();

  function handleTitle(e){
    setTitle(e.target.value);
  }
  function handleBody(e){
    setBody(e.target.value);
  }
  function addNewBlog(){
    let data = {title,body,isPublic: false};
    fetch('http://localhost:9191/blog',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then((data)=>navigateTo(`/blog/${data.id}`))
    setTitle('');
    setBody('');
  }
  return (
    <>
    <div className='my-12 flex justify-around'>
        <br /> <br />
        <div className='left'> 
            <input value={title} onChange={handleTitle} className='bg-gray-100 h-10 w-full rounded-sm p-2' type="text" placeholder='Enter title' /> <br /> <br />
            <textarea value={body} onChange={handleBody} className='bg-gray-100 h-28 w-80 rounded-sm p-[40px]' type="text" placeholder='Enter content' /> <br /> <br />
        </div>
        <div className='right'> 
            <div className='bg-gray-100 h-10 rounded-sm p-2' > <Markdown>{title}</Markdown> </div> <br /> <br />
            <div className='bg-gray-100 h-28 w-80 rounded-sm p-[40px]' > <Markdown>{body}</Markdown> </div> <br /> <br />
        </div>

    </div>
    <button onClick={addNewBlog} className='bg-blue-100 rounded-md h-8 w-16 ml-40'>Add</button>
    </>
  ) 
} 
