import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogContext from "../../context/BlogContext";

export default function BlogList() {
  const { blogList, setBlogList } = useContext(BlogContext);
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9191/blog/search?value=", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json(); // Parse the JSON data
      })
      .then((parsedData) => {
        setBlogList(parsedData); // Set the state with the parsed data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  function handleClick(blog) {
    setBlogList([blog]);
  }

  return (
    <div className="my-12">
      {blogList?.map((blog, index) => {
        return (
          <div
            key={index}
            onClick={() => handleClick(blog)}
            className="w-full cursor-pointer my-12 rounded overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4">
              <Link to={`/blog/${blog.id}`}>
                <p className="font-bold text-xl mb-2">{blog.title}</p>
              </Link>
              <div className="text-gray-700 text-base flex justify-between">
                {blog.body}
                <Link to={`/blog/edit/${blog.id}`}>
                  <button className="text-white bg-gray-500 hover:bg-gray-500 focus:ring-2 focus:ring-gray-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              {hashtags.map((hashtag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {hashtag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
