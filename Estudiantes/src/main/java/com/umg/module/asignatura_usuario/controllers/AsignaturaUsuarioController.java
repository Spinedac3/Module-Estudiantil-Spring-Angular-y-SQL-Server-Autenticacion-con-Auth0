package com.umg.module.asignatura_usuario.controllers;


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


import com.umg.module.asignatura_usuario.models.AsignaturaUsuario;
import com.umg.module.asignatura_usuario.repository.AsignaturaUsuarioRepository;
import com.umg.module.utilities.ResourceNotFoundException;



@RestController
@RequestMapping("/api/v1/asignaciones/alumnos")
public class AsignaturaUsuarioController {
	@Autowired
	private AsignaturaUsuarioRepository asignaturaUsuarioRepository;
	
	@GetMapping
	public List<AsignaturaUsuario> list() {
		return asignaturaUsuarioRepository.findAll();
	}
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody AsignaturaUsuario asignaturausuario) {
		asignaturaUsuarioRepository.save(asignaturausuario);
	}

	@GetMapping("/{id}")
	public AsignaturaUsuario get(@PathVariable("id") Integer id) {
		return asignaturaUsuarioRepository.getOne(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<AsignaturaUsuario> updateAsignatura(@PathVariable("id") Integer id, @Valid @RequestBody AsignaturaUsuario asignaturaDetail)
			 throws ResourceNotFoundException {
		AsignaturaUsuario asignaturaUsuario = asignaturaUsuarioRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No se encontro la Asignatura con el ID :: " + id));
		asignaturaUsuario.setId_asignatura_usuario(asignaturaUsuario.getId_asignatura_usuario());
		asignaturaUsuario.setId_usuario(asignaturaDetail.getId_usuario());
		asignaturaUsuario.setId_asignatura(asignaturaDetail.getId_asignatura());
		final AsignaturaUsuario updateAsignaturaUsuario = asignaturaUsuarioRepository.save(asignaturaUsuario);
		return ResponseEntity.ok(updateAsignaturaUsuario);
	}
	
	@DeleteMapping("/{id}")
	public  Map<String, Boolean> deleteUser(@PathVariable("id") Integer id) throws ResourceNotFoundException {
		   AsignaturaUsuario asignaturaUsuario = asignaturaUsuarioRepository.findById(id)
			       .orElseThrow(() -> new ResourceNotFoundException("No se encontro el Usuario con el siguiente ID :: " + id));

			        asignaturaUsuarioRepository.delete(asignaturaUsuario);
			        Map<String, Boolean> response = new HashMap<>();
			        response.put("deleted", Boolean.TRUE);
			        return response;
	}
}
