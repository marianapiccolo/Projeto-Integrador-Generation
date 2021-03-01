package com.redeSocial.edunity.controller;

import java.util.List;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.redeSocial.edunity.model.Usuario;
import com.redeSocial.edunity.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
@CrossOrigin("*")
public class UsuarioController {
	
	 @Autowired 
	 private UsuarioRepository usuarioRepository;
	
	 @GetMapping
	 public ResponseEntity<List<Usuario>> GetAll(){
		  return ResponseEntity.ok(usuarioRepository.findAll());
	 }
	 
	 @GetMapping ("/{id}")
	 public ResponseEntity<Usuario> GetById(@PathVariable long id){
		 return usuarioRepository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	 }
	
    @GetMapping("/usuario/{usuario}")
    public ResponseEntity<List<Usuario>> GetByUsuario(@PathVariable String nome){
    	return ResponseEntity.ok(usuarioRepository.findAllByNameContainingIgnoreCase(nome));
    }
    
}
