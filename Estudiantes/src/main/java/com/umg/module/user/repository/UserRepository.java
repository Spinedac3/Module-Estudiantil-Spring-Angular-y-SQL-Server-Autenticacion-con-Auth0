package com.umg.module.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import com.umg.module.user.models.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	@Query("select c from User c where c.id_tipo_usuario like %?1")
	List<User> EncontrarAlumnos(Integer chars);
}
