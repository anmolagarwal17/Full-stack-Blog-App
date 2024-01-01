import { useContext } from 'react'
import BlogContext from '../../context/BlogContext'

export default function BlogDetails() {
  
  const {blog} = useContext(BlogContext);
  return (
        <div>
            <div className='my-12 mr-72 flex justify-around'>
                <br /> <br />
                <div className=''>
                    <p className='bg-gray-100 h-10 rounded-sm p-2'> {blog?.title} </p> <br /> <br />
                    <p className='bg-gray-100 h-10 rounded-sm p-2'> {blog?.author} </p> <br /> <br />
                    <p className='bg-gray-100 h-28 w-80 rounded-sm p-[40px]'> {blog?.content} </p> <br /> <br />
                </div>
            </div>
        </div>
  )
}
