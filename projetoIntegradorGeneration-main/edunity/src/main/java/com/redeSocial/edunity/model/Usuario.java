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
	private @NotNull @Size(min = 3, max = 60) String nome_completo;
	private @NotNull @Size(min = 5, max = 60) String email;
	private @NotNull @Size(min = 3, max = 20) String senha;

}
