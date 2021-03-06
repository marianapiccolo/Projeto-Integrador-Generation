package com.redeSocial.edunity.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Usuario {

	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) long id;
	private @NotNull @Size(min = 3, max = 60) String nome;
	private @NotNull @Size(min = 5, max = 60) String email;
	private @NotNull String senha;
	private @OneToMany (mappedBy = "usuario", cascade = CascadeType.ALL) @JsonIgnoreProperties("Usuario") List<Postagem> postagem;

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
