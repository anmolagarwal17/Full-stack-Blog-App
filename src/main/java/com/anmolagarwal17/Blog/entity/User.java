package com.anmolagarwal17.Blog.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@Table
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(updatable = false)
    private Date createdDate;

    @Column
    private Date modifiedDate;

    @Column
    private String userName;

    @Column
    private String displayName;

    @Column
    private String password;

    @PrePersist
    protected void prePersist() {
        createdDate = new Date();
    }

    @PreUpdate
    protected void preUpdate() {
        modifiedDate = new Date();
    }
}

// TODO: 30-12-2023 TODOs after whole project is up and working
// TODO: 30-12-2023  move created/modified date and functions in one class and use that