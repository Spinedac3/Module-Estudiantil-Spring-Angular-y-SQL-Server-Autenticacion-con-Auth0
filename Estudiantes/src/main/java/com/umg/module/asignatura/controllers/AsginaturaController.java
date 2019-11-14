package com.umg.module.asignatura.controllers;

import java.util.ArrayList;
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

import com.umg.module.asignatura.models.Asignatura;
import com.umg.module.asignatura.repository.AsignaturaRepository;
import com.umg.module.utilities.ResourceNotFoundException;



@RestController
@RequestMapping("/api/v1/asignaciones/maestros")
public class AsginaturaController {
	@Autowired
	private AsignaturaRepository asignaturaRepository;
	
	@GetMapping
	public List<Asignatura> list() {
		return asignaturaRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Asignatura asignatura) {
		asignaturaRepository.save(asignatura);
	}

	@GetMapping("/{id}")
	public Asignatura get(@PathVariable("id") Integer id) {
		return asignaturaRepository.getOne(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Asignatura> updateAsignatura(@PathVariable("id") Integer id, @Valid @RequestBody Asignatura asignaturaDetail)
			 throws ResourceNotFoundException {
		Asignatura asignatura = asignaturaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No se encontro la Asignatura con el ID :: " + id));
		asignatura.setId_asginatura(asignatura.getId_asginatura());
		asignatura.setId_profesor(asignaturaDetail.getId_profesor());
		asignatura.setId_curso(asignaturaDetail.getId_curso());
		asignatura.setNombre(asignaturaDetail.getNombre());
		asignatura.setDescripcion(asignaturaDetail.getDescripcion());
		asignatura.setSeccion(asignaturaDetail.getSeccion());
		final Asignatura updateAsignatura = asignaturaRepository.save(asignatura);
		return ResponseEntity.ok(updateAsignatura);
	}
	
	@DeleteMapping("/{id}")
	public  Map<String, Boolean> deleteUser(@PathVariable("id") Integer id) throws ResourceNotFoundException {
		   Asignatura asignatura = asignaturaRepository.findById(id)
			       .orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario con el siguiente ID :: " + id));

			        asignaturaRepository.delete(asignatura);
			        Map<String, Boolean> response = new HashMap<>();
			        response.put("deleted", Boolean.TRUE);
			        return response;
	}
}
