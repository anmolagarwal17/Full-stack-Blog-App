import React from "react";
import BlogContext from "./BlogContext";

const BlogContextProvider = ({children}) => {
    const [blogList,updateBlogList] = React.useState([]);
    const setBlogList = (newValue) => {
        updateBlogList(newValue);
        // console.log('Variable updated:', newValue);
      };
    return (
        <BlogContext.Provider value={{blogList,setBlogList}}>
            {children}
        </BlogContext.Provider>
    )
}  

export default BlogContextProvider; 


