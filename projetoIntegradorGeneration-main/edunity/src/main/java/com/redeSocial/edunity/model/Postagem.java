package com.redeSocial.edunity.model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "postagem")
public class Postagem {
		
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) long id;
	private @NotNull @Size(min = 5, max = 50) String titulo;
	private @Temporal(TemporalType.TIMESTAMP) Date date =new java.sql.Date(System.currentTimeMillis());	
	/*Aqui vai um private imagens
	@Controller
	public class Postagem{
		public static String uploadDirectory = System.getProperty("")
	}*/
	private @NotNull @Size(min = 10, max = 1000) String conteudo;
	private @ManyToOne @JsonIgnoreProperties ("Postagem") Tema tema;
	private @ManyToOne @JsonIgnoreProperties ("Postagem") Usuario usuario;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}

	public Tema getTema() {
		return tema;
	}

	public void setTema(Tema tema) {
		this.tema = tema;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}	
}
