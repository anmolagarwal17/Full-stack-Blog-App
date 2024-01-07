import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { useParams, useNavigate } from 'react-router-dom';

export default function EditBlog() {
  const [blog,setBlog] = useState(null);
  const {id} = useParams();
  const navigateTo = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9191/blog/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json(); // Parse the JSON data
    })
    .then(parsedData => {
      setBlog(parsedData)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  function handleTitle(e){
    setBlog((prevBlog) => ({...prevBlog, title: e.target.value}));
  }
  function handleBody(e){
    setBlog((prevBlog) => ({...prevBlog, body: e.target.value}));
  }
  function editBlog(){
      const clonedBlog = JSON.parse(JSON.stringify(blog));
      delete clonedBlog.createdBy;
    fetch('http://localhost:9191/blog',{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(clonedBlog)
    }).then(res => res.json())
      .then((data) => navigateTo(`/blog/${data.id}`))
  }
  return (
    <>
    <div className='my-12 flex justify-around'>
        <br /> <br />
        <div className='left'> 
            <input value={blog?.title} onChange={handleTitle} className='bg-gray-100 h-10 w-full rounded-sm pl-11' type="text" placeholder='Enter title' /> <br /> <br />
            <textarea value={blog?.body} onChange={handleBody} className='bg-gray-100 h-28 w-80 rounded-sm p-[40px]' type="text" placeholder='Enter content' /> <br /> <br />
        </div>
        <div className='right'> 
            <div className='bg-gray-100 h-10 rounded-sm p-2' > <Markdown>{blog?.title}</Markdown> </div> <br /> <br />
            <div className='bg-gray-100 h-28 w-80 rounded-sm p-[40px]' > <Markdown>{blog?.body}</Markdown> </div> <br /> <br />
        </div>

    </div>
    <button onClick={editBlog} className='bg-blue-100 rounded-md h-8 w-16 ml-40'>Edit</button>
    </>
  ) 
} 
