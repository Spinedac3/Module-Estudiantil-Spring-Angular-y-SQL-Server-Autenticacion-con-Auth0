package com.umg.module.user_access.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Usuario_Acceso")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class UserAccess {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_usuario_acceso;
	private int id_usuario;
	private String login;
	private String password;
	
	public int getId_usuario_acceso() {
		return id_usuario_acceso;
	}
	public void setId_usuario_acceso(int id_usuario_acceso) {
		this.id_usuario_acceso = id_usuario_acceso;
	}
	public int getId_usuario() {
		return id_usuario;
	}
	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
