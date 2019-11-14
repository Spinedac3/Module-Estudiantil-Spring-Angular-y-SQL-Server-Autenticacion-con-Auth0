package com.umg.module.user.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
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

import com.umg.module.user.models.User;
import com.umg.module.user.repository.UserRepository;
import com.umg.module.utilities.ResourceNotFoundException;

@RestController
@RequestMapping("/api/v1/users")
public class UsersController {
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping
	public List<User> list() {
		return userRepository.findAll();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody User user) {
		userRepository.save(user);
	}

	@GetMapping("/{id}")
	public User get(@PathVariable("id") Integer id) {
		return userRepository.getOne(id);
	}
	

	@PutMapping("/{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") Integer id, @Valid @RequestBody User userDetail)
	 throws ResourceNotFoundException {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario con el ID :: " + id));
		user.setId_usuario(userDetail.getId_usuario());
		user.setId_tipo_usuario(userDetail.getId_tipo_usuario());
		user.setNombre(userDetail.getNombre());
		user.setApellido(userDetail.getApellido());
		user.setTelefono(userDetail.getTelefono());
		user.setEmail(userDetail.getEmail());
		user.setDireccion(userDetail.getDireccion());
		user.setCod_postal(userDetail.getCod_postal());
		user.setFecha_nacimiento(userDetail.getFecha_nacimiento());
		user.setFecha_ingreso(userDetail.getFecha_ingreso());
		final User updateUser = userRepository.save(user);
		return ResponseEntity.ok(updateUser);
		
	}
	
	@DeleteMapping("/{id}")
	public  Map<String, Boolean> deleteUser(@PathVariable("id") Integer id) throws ResourceNotFoundException {
		   User user = userRepository.findById(id)
			       .orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario con el siguiente ID :: " + id));

			        userRepository.delete(user);
			        Map<String, Boolean> response = new HashMap<>();
			        response.put("deleted", Boolean.TRUE);
			        return response;
	}
	
}
