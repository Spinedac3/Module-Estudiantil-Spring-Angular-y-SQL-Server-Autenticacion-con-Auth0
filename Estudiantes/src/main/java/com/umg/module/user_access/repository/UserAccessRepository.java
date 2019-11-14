package com.umg.module.user_access.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.umg.module.user_access.models.UserAccess;

public interface UserAccessRepository extends JpaRepository<UserAccess, Integer> {

}
