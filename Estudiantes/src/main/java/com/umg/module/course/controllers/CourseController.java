package com.umg.module.course.controllers;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.umg.module.course.models.Course;
import com.umg.module.course.repository.CourseRepository;
import com.umg.module.utilities.ResourceNotFoundException;


@RestController
@RequestMapping("/api/v1/cursos")
public class CourseController {
	@Autowired
	private CourseRepository courseRepository;
	@GetMapping
	public List<Course> list() {
		return courseRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Course course) {
		courseRepository.save(course);
	}

	@GetMapping("/{id}")
	public Course get(@PathVariable("id") Integer id) {
		return courseRepository.getOne(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Course> updateCourse(@PathVariable("id") Integer id, @Valid @RequestBody Course courseDetail)
			throws ResourceNotFoundException {
		Course course = courseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No se encontro el Curso con el ID :: " + id));	
	    course.setId_curso(course.getId_curso());
	    course.setNombre(courseDetail.getNombre());
	    course.setDescripcion(courseDetail.getDescripcion());
	    final Course updateCourse = courseRepository.save(course);
	    return ResponseEntity.ok(updateCourse);
	}
	
	@DeleteMapping("/{id}")
	public  Map<String, Boolean> deleteCourse(@PathVariable("id") Integer id) throws ResourceNotFoundException {
		   Course course = courseRepository.findById(id)
			       .orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario con el siguiente ID :: " + id));

			        courseRepository.delete(course);
			        Map<String, Boolean> response = new HashMap<>();
			        response.put("deleted", Boolean.TRUE);
			        return response;
	}
	
}
