package com.redeSocial.edunity.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
@Table(name = "postagem")
public class Postagem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull
	@Size(min = 5, max = 50)
	private String titulo;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date date =new java.sql.Date(System.currentTimeMillis());
	
	/*Aqui vai um private ibagens
	@Controller
	public class Postagem{
		public static String uploadDirectory = System.getProperty("")
	}*/
	
	@NotNull
	@Size(min = 10, max = 1000)
	private String conteudo;

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
	
	
}
