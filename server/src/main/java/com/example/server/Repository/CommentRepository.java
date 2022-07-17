package com.example.server.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.cassandra.repository.AllowFiltering;
import org.springframework.data.cassandra.repository.CassandraRepository;

import com.example.server.Entity.Comment;

public interface CommentRepository extends CassandraRepository<Comment, UUID>{

    Comment save(Comment comment);

    @AllowFiltering
    ArrayList<Comment> findAllByPostID(UUID postID);
}