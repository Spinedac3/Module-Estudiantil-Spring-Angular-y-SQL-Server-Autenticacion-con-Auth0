package com.umg.module.asignatura.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Asignatura")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Asignatura {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_asginatura;
	private int id_profesor;
	private int id_curso;
	private String nombre;
	private String descripcion;
	private String seccion;
	public int getId_asginatura() {
		return id_asginatura;
	}
	public void setId_asginatura(int id_asginatura) {
		this.id_asginatura = id_asginatura;
	}
	public int getId_profesor() {
		return id_profesor;
	}
	public void setId_profesor(int id_profesor) {
		this.id_profesor = id_profesor;
	}
	public int getId_curso() {
		return id_curso;
	}
	public void setId_curso(int id_curso) {
		this.id_curso = id_curso;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getSeccion() {
		return seccion;
	}
	public void setSeccion(String seccion) {
		this.seccion = seccion;
	}
	

}
