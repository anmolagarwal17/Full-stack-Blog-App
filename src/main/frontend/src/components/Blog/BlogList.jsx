import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BlogContext from '../../context/BlogContext'


export default function BlogList(blogs) {
  const blogss = blogs.blogs;
  const [hashtags, setHashtags] = useState([]);
  const {setBlog} = useContext(BlogContext);

  function handleClick(blog) {
    setBlog(blog);
  }

  return (
    <div className="my-12">
      {blogss.map((blog) => {
        return (
          <>
          <div onClick={()=>handleClick(blog)} className="w-full cursor-pointer my-12 rounded overflow-hidden shadow-lg">
            <Link
              to="/blog"
            >
               <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{blog.title}</div>
                <div className="text-sm ml-12 mb-2">{blog.author}</div>
                <p className="text-gray-700 text-base">{blog.content}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {hashtags.map((hashtag, index) => {
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {hashtag}
                  </span>;
                })}
              </div>
            </Link>
            </div>
          </>
        );
      })}
    </div>
  );
}
