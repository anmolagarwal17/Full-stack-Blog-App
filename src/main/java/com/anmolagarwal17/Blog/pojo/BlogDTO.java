package com.anmolagarwal17.Blog.pojo;

import com.anmolagarwal17.Blog.entity.Blog;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class BlogDTO {

    private Long id;

    private Date createdDate;

    private Date modifiedDate;

    private String title;

    private String body;

    private UserDTO createdBy;

    private Boolean isPublic;

    public BlogDTO(Blog blog){
        if(blog == null){
            return;
        }
        this.id = blog.getId();
        this.createdDate = blog.getCreatedDate();
        this.modifiedDate = blog.getModifiedDate();
        this.title = blog.getTitle();
        this.body = blog.getBody();
        this.createdBy = new UserDTO(blog.getCreatedBy());
        this.isPublic = blog.getIsPublic();
    }
    public Blog createBlogObject() {
        Blog blog = new Blog();
        blog.setId(this.id);
        blog.setCreatedDate(this.createdDate);
        blog.setModifiedDate((this.modifiedDate));
        blog.setTitle(this.title);
        blog.setBody(this.body);
        if(this.createdBy != null) {
            blog.setCreatedBy(this.createdBy.createUserObject());
        }
        blog.setIsPublic(this.isPublic);
        return blog;
    }
}
