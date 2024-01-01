import React from "react";
import BlogContext from "./BlogContext";

const BlogContextProvider = ({children}) => {
    const [blog,setBlog] = React.useState(null);
    return (
        <BlogContext.Provider value={{blog,setBlog}}>
            {children}
        </BlogContext.Provider>
    )
}  

export default BlogContextProvider; 


