import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
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
import BlogContextProvider from "./context/BlogContextProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<BlogContextProvider><Home /></BlogContextProvider>} />
      <Route path="create" element={<NewBlog />} />
      <Route path="blog" element={<BlogContextProvider><BlogDetails /> </BlogContextProvider>} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
