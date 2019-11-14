package com.umg.module.nota.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.umg.module.nota.models.Nota;
import com.umg.module.nota.models.NotaService;
import com.umg.module.nota.repository.NotaRepository;

@RestController
@RequestMapping("/api/v1/notas")
public class NotaController {
	@Autowired
	private NotaRepository notaRepository;
	
	@Autowired
	private NotaService notaService;
	
	@GetMapping("/{id_usuario}")
	public List<Nota> list(@PathVariable("id_usuario") Integer id_usuario) {
		List<Nota> EncontrarporId = this.notaService.ConsultarPorUsuario(id_usuario);
		return EncontrarporId;
	}

	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Nota nota) {
		notaRepository.save(nota);
	}


}
