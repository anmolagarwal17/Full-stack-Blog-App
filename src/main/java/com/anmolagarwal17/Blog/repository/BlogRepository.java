package com.anmolagarwal17.Blog.repository;

import com.anmolagarwal17.Blog.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Long> {

    @Query(nativeQuery = true, value = "select * from blog where title like CONCAT('%',:searchString,'%') or body like CONCAT('%',:searchString,'%')")
    List<Blog> search(@Param("searchString") String searchString);

}
