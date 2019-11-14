package com.umg.module.nota.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedStoredProcedureQueries;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureParameter;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@NamedStoredProcedureQueries({
	  @NamedStoredProcedureQuery(
			  name = "ConsultarPorUsuario",
			  procedureName= "ConsultarPorUsuario",
			  resultClasses = { Nota.class },
			  parameters = {
					  @StoredProcedureParameter(
							  mode = ParameterMode.IN,
							  name = "id_usuario",
							  type = Integer.class)
			  }
			  )
})
@Table(name = "Nota")
public class Nota {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_nota;
	private int id_asignatura;
	private int id_calificacion;
	private int id_usuario;
	private int nota;
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
	public int getNota() {
		return nota;
	}
	public void setNota(int nota) {
		this.nota = nota;
	}
}
