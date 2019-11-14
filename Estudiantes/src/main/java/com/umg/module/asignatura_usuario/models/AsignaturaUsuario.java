package com.umg.module.asignatura_usuario.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Asignatura_Usuario")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class AsignaturaUsuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_asignatura_usuario;
	private int id_usuario;
	private int id_asignatura;
	public int getId_asignatura_usuario() {
		return id_asignatura_usuario;
	}
	public void setId_asignatura_usuario(int id_asignatura_usuario) {
		this.id_asignatura_usuario = id_asignatura_usuario;
	}
	public int getId_usuario() {
		return id_usuario;
	}
	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}
	public int getId_asignatura() {
		return id_asignatura;
	}
	public void setId_asignatura(int id_asignatura) {
		this.id_asignatura = id_asignatura;
	}
	
	

}
