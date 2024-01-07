import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import BlogContextProvider from "./context/BlogContextProvider";

export default function Layout() {
  return (
    <div>
      <BlogContextProvider>
        <Header /> 
        <Outlet />
      </BlogContextProvider>
    </div>
  );
}
