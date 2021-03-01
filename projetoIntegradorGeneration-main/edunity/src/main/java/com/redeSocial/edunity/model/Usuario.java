package com.redeSocial.edunity.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "nome_completo")
public class Usuario {

	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) long id;
	private @NotNull @Size(min = 3, max = 60) String nome;
	private @NotNull @Size(min = 5, max = 60) String email;
	private @NotNull @Size(min = 3, max = 20) String senha;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	

}
