package com.umg.module.course.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.umg.module.course.models.Course;

public interface CourseRepository extends JpaRepository<Course, Integer> {

}
