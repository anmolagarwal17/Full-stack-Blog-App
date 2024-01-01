import { useState } from 'react';
import blogDB from '../../data/Blogs';
import BlogList from '../Blog/BlogList';

export default function Home() {
    const [blogs,setBlogs] = useState(blogDB);

    return (
        <>
           <BlogList blogs={blogs}></BlogList>
        </>
    );
}  

