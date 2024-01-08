import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import EditPreviewMarkdownWindow from '../EditPreviewMarkdownWindow/EditPreviewMarkdownWindow';

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
    <EditPreviewMarkdownWindow blog={blog} handleTitle={handleTitle} handleBody={handleBody}></EditPreviewMarkdownWindow>
    <button onClick={editBlog} className='bg-blue-100 rounded-md h-8 w-16 ml-40'>Edit</button>
    </>
  ) 
} 
