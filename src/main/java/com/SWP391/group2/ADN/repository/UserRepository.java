package com.SWP391.group2.ADN.repository;


import com.SWP391.group2.ADN.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail( String email );

     boolean existsByEmail( String email );
}
