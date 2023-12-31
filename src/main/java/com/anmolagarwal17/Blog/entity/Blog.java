package com.anmolagarwal17.Blog.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@Table
@Entity
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(updatable = false)
    private Date createdDate;

    @Column
    private Date modifiedDate;

    @Column
    private String title;

    @Column
    private String body;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.DETACH})
    @JoinColumn(name ="created_by")
    private User createdBy;
    // todo get user from context and add pre persist

//    @Column
//    private User modifiedBy; // probably will not need
    // todo get user from context and add pre update

    @Column(columnDefinition = "boolean default false", nullable = false)
    private Boolean isPublic;

    @PrePersist
    protected void prePersist() {
        createdDate = new Date();
    }

    @PreUpdate
    protected void preUpdate() {
        modifiedDate = new Date();
    }
}
