package com.anmolagarwal17.Blog.controller;

import com.anmolagarwal17.Blog.pojo.BlogDTO;
import com.anmolagarwal17.Blog.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class BlogController {

    @Autowired
    BlogService blogService;

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:5173") // Allow requests from the specified origin
    public BlogDTO getBlogById(@PathVariable(required = true) long id){
        return blogService.getBlogById(id);
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:5173") // Allow requests from the specified origin
    public BlogDTO createBlog(@RequestBody BlogDTO blogDTO){
        // TODO: 30-12-2023 check if any user is logged in, if yes then save 
        //  algo ensure that id should be null or else return error
        return blogService.createBlog(blogDTO);
    }

    @PutMapping
    @CrossOrigin(origins = "http://localhost:5173") // Allow requests from the specified origin
    public BlogDTO updateBlog(@RequestBody BlogDTO blogDTO){
        // TODO: 30-12-2023 check if logged use is the owner of blog id(getBlogByIdAndCreatedBy, if yes then only edit
        return blogService.updateBlog(blogDTO);
    }

    @GetMapping("/search")
    @CrossOrigin(origins = "http://localhost:5173") // Allow requests from the specified origin
    public List<BlogDTO> searchBlog(@RequestParam(required = true) String value){
        return blogService.searchBlog(value);
        // TODO: 30-12-2023 add pagination later 
        // TODO: 30-12-2023 read some blog about how to add pagination in java spring boot application (dev.to, medium etc)
    }

//    @Controller
//    static class FaviconController {
//
//        @GetMapping("favicon.ico")
//        @ResponseBody
//        void returnNoFavicon() {
//        }
//    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:5173") // Allow requests from the specified origin
    public void deleteBlog(@PathVariable(required = true) long id) {
        blogService.deleteBlog(id);
    }
}

