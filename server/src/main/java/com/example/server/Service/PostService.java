package com.example.server.Service;

import com.example.server.Entity.Post;
import com.example.server.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public ArrayList<Post> submitPostToDB(Post postData){
        Timestamp dateTime = new Timestamp(new Date().getTime());

        postData.setPostID(UUID.randomUUID());
        postData.setLikes(0);
        postData.setDateTime(dateTime);

        postRepository.save(postData);
        ArrayList<Post> result = retrivePostFromDB();
        return result;
    }


    public ArrayList<Post> retrivePostFromDB(){
        ArrayList<Post> result = postRepository.findAll();
        return result;
    }

    public ArrayList<Post> deletePostFromDB(UUID postID){
        postRepository.deleteById(postID);

        ArrayList<Post> result = retrivePostFromDB();
        return result;
    }
}
