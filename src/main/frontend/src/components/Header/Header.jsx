import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BlogContext from "../../context/BlogContext";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const {setBlogList} = useContext(BlogContext);

  function handleSearch(e) {
    const enteredString = e.target.value;
    fetch(`http://localhost:9191/blog/search?value=${enteredString}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.text().then(text => {
        if (text.trim().length === 0) {
          return [];
        } else {
          try {
            return JSON.parse(text);
          } catch (error) {
            throw new Error('Invalid JSON format');
          }
        }
      });
    })
    .then(parsedData => {
      setBlogList(parsedData); // Set the state with the parsed data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }
  
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between mx-auto max-w-screen-xl">
          <div className="">
            <Link
              to=""
              className="text-white focus:ring-2 focus:ring-gray-400 bg-gray-500 hover:bg-gray-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Home
            </Link>
          </div>
          <div className="">
            <div className="px-9 inline-block">
              <input
                onChange={handleSearch}
                className="px-3 h-10 focus:ring-2 focus:ring-gray-400 rounded-md border-gray-300 border-[2px]"
                type="text"
                placeholder="Search.."
              />
            </div>
            <Link
              to="blog/create"
              className="text-white bg-gray-500 hover:bg-gray-500 focus:ring-2 focus:ring-gray-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              Create
            </Link>
            <Link
              to="#"
              className="text-white focus:ring-2 focus:ring-gray-400 bg-gray-500 hover:bg-gray-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              {isLoggedIn ? "Log out" : "Log in"}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
