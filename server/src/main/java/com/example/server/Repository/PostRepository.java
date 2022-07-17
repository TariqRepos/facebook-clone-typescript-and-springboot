package com.example.server.Repository;

import com.example.server.Entity.Post;
import org.springframework.data.cassandra.repository.AllowFiltering;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.UUID;

@Repository
public interface PostRepository extends CassandraRepository<Post, UUID> {

    ArrayList<Post> findAll();
    Post save(Post post);
    void deleteById(UUID postId);
}
