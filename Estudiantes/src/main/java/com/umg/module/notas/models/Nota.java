package com.umg.module.notas.models;

public class Nota {
	private int id_nota;
	private int id_asignatura;
	private int id_calificacion;
	private int id_usuario;
	private String descripcion;
	
	public int getId_nota() {
		return id_nota;
	}
	public void setId_nota(int id_nota) {
		this.id_nota = id_nota;
	}
	public int getId_asignatura() {
		return id_asignatura;
	}
	public void setId_asignatura(int id_asignatura) {
		this.id_asignatura = id_asignatura;
	}
	public int getId_calificacion() {
		return id_calificacion;
	}
	public void setId_calificacion(int id_calificacion) {
		this.id_calificacion = id_calificacion;
	}
	public int getId_usuario() {
		return id_usuario;
	}
	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}
