import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css"
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import NewBlog from "./components/NewBlog/NewBlog.jsx";
import BlogDetails from "./components/BlogDetails/BlogDetails.jsx";
import EditBlog from "./components/EditBlog/EditBlog.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/blog/create" element={<NewBlog />} />
      <Route path="/blog/edit/:id" element={<EditBlog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider> 
  </React.StrictMode>
);
