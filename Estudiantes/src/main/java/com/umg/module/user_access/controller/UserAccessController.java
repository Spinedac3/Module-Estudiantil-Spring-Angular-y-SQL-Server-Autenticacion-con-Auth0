package com.umg.module.user_access.controller;

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


import com.umg.module.user_access.models.UserAccess;
import com.umg.module.user_access.repository.UserAccessRepository;
import com.umg.module.utilities.ResourceNotFoundException;



@RestController
@RequestMapping("/api/v1/credenciales")
public class UserAccessController {
	@Autowired
	private UserAccessRepository userAccessRepository;
	
	@GetMapping
	public List<UserAccess> list() {
		return userAccessRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody UserAccess usercredenciales) {
		userAccessRepository.save(usercredenciales);
	}
	
	@GetMapping("/{id}")
	public UserAccess get(@PathVariable("id") Integer id) {
		return userAccessRepository.getOne(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<UserAccess> updateCredential(@PathVariable("id") Integer id, @Valid @RequestBody UserAccess newuseraccess)
			 throws ResourceNotFoundException{
		UserAccess userold = userAccessRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario con el ID :: " + id));
	    userold.setId_usuario(userold.getId_usuario());
		userold.setId_usuario_acceso(userold.getId_usuario_acceso());
		userold.setLogin(newuseraccess.getLogin());
		userold.setPassword(newuseraccess.getPassword());
		final UserAccess updateuseraccess = userAccessRepository.save(userold);
		return ResponseEntity.ok(updateuseraccess);
	}
	
	@DeleteMapping("/{id}")
	public  Map<String, Boolean> deleteUser(@PathVariable("id") Integer id) throws ResourceNotFoundException {
		   UserAccess userAccess = userAccessRepository.findById(id)
			       .orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario con el siguiente ID :: " + id));

			        userAccessRepository.delete(userAccess);
			        Map<String, Boolean> response = new HashMap<>();
			        response.put("deleted", Boolean.TRUE);
			        return response;
	}
	
}
