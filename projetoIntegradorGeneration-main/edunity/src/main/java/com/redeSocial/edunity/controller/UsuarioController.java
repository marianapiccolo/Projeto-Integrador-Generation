package com.redeSocial.edunity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.redeSocial.edunity.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
@CrossOrigin("*")
public class UsuarioController {
	
	 @Autowired 
	 private UsuarioRepository usuarioRepository;
	
	 /*@GetMapping
	 public ResponseEntity<>*/
	

}
