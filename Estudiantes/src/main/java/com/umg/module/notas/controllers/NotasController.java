package com.umg.module.notas.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.umg.module.notas.models.Nota;



@RestController
@RequestMapping("/api/v1/notas")
public class NotasController {
	@GetMapping
	public List<Nota> list() {
		List<Nota> notas = new ArrayList<>();
		return notas;
	}
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Nota notas) {
	}

	@GetMapping("/{id}")
	public Nota get(@PathVariable("id") long id) {
		return new Nota();
	}
	
}
