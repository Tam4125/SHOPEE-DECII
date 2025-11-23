package com.example.demo.repositories;

import com.example.demo.models.UserForML;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserForMLRepository extends JpaRepository<UserForML, Integer> {
    UserForML findByUserId(Integer userId);
}
