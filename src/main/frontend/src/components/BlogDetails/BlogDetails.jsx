import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:9191/blog/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json(); 
      })
      .then((parsedData) => {
        setBlog(parsedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <div className="my-12 mr-72 flex justify-around">
        <br /> <br />
        <div className="">
          <p className="bg-gray-100 h-10 rounded-sm p-2"> {blog?.title} </p>
          <br /> <br />
          <p className="bg-gray-100 h-28 w-80 rounded-sm p-[40px]">
            {blog?.body}
          </p>
          <br /> <br />
        </div>
      </div>
    </div>
  );
}
