import React, { useState } from 'react'
import Markdown from 'react-markdown'

export default function NewBlog() {
  const [title,setTitle] = useState("");
  const [author,setAuthor] = useState("");
  const [content,setContent] = useState("");

  function handleTitle(e){
    setTitle(e.target.value);
  }
  function handleAuthor(e){
    setAuthor(e.target.value);
  }
  function handleContent(e){
    setContent(e.target.value);
  }
  return (
    <>
    <div className='my-12 flex justify-around'>
        <br /> <br />
        <div className='left'> 
            <input onChange={handleTitle} className='bg-gray-100 h-10 w-full rounded-sm p-2' type="text" placeholder='Enter title' /> <br /> <br />
            <input onChange={handleAuthor} className='bg-gray-100 my-5 h-10 w-full rounded-sm p-2' type="text" placeholder='Enter author name' /> <br /> <br />
            <textarea onChange={handleContent} className='bg-gray-100 h-28 w-80 rounded-sm p-[40px]' type="text" placeholder='Enter content' /> <br /> <br />
        </div>
        <div className='right'> 
            <p className='bg-gray-100 h-10 rounded-sm p-2' > <Markdown>{title}</Markdown> </p> <br /> <br />
            <p className='bg-gray-100 h-10 rounded-sm p-2' > <Markdown>{author}</Markdown> </p> <br /> <br />
            <p className='bg-gray-100 h-28 w-80 rounded-sm p-[40px]' > <Markdown>{content}</Markdown> </p> <br /> <br />
        </div>

    </div>
    <button className='bg-blue-100 rounded-md h-8 w-16 ml-40'>Add</button>
    </>
  )
} 
