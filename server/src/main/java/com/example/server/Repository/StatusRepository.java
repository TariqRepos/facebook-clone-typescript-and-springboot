package com.example.server.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.cassandra.repository.CassandraRepository;

import com.example.server.Entity.Status;

public interface StatusRepository extends CassandraRepository<Status, UUID> {

    Status save(Status status);
    ArrayList<Status> findAll();
}
