package com.anmolagarwal17.Blog.pojo;

import com.anmolagarwal17.Blog.entity.User;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDTO {

    private Long id;

    private String userName;

    private String displayName;

    public UserDTO(User user) {
        if(user == null){
            return;
        }
        this.id = user.getId();
        this.userName = user.getUserName();
        this.displayName = user.getDisplayName();
    }

    public User createUserObject(){
        User user = new User();
        user.setId(this.id);
        user.setUserName(this.userName);
        user.setDisplayName(this.displayName);
        return user;
    }
}
