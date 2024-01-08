package com.anmolagarwal17.Blog.service;

import com.anmolagarwal17.Blog.entity.Blog;
import com.anmolagarwal17.Blog.pojo.BlogDTO;
import com.anmolagarwal17.Blog.repository.BlogRepository;
import jakarta.transaction.Transactional;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BlogService {

    @Autowired
    BlogRepository blogRepository;

    @SneakyThrows
    @Transactional
    public BlogDTO createBlog(BlogDTO blogDTO) {
        // TODO: 30-12-2023 create only when user logged in
        if (blogDTO.getId() != null) {
            throw new Exception("While creating a new blog, id should be 0");
        }
        Blog savedBlog = blogRepository.save(blogDTO.createBlogObject());
        // TODO: 30-12-2023 log here that blog is saved successfully with title and id and user id
        System.out.println("Blog saved with id  : " + savedBlog.getId() + " title   : " + savedBlog.getTitle() +
                "create by user : " + savedBlog.getCreatedBy());
        return new BlogDTO(savedBlog);
    }

    public List<BlogDTO> searchBlog(String searchString) {
        List<Blog> blogs = blogRepository.search(searchString);
        if(CollectionUtils.isEmpty(blogs)){
            return null;
        }
        return blogs.stream().map(BlogDTO::new).collect(Collectors.toList());
    }

    public BlogDTO getBlogById(long id) {
        Blog blog = blogRepository.getReferenceById(id);
        return new BlogDTO(blog);
    }

    @SneakyThrows
    @Transactional
    public BlogDTO updateBlog(BlogDTO blogDTO) {
        if(blogDTO.getId() == null || blogDTO.getId() == 0){
            throw new Exception("Cannot update blog with id as 0 or null. BlogDTO: "+ blogDTO);
        }
        Blog updatedBlog = blogRepository.save(blogDTO.createBlogObject());
        return new BlogDTO(updatedBlog);
    }

    public void deleteBlog(long id) {
        blogRepository.deleteById(id);
    }
}
