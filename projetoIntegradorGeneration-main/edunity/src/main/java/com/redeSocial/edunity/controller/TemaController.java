package com.redeSocial.edunity.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.redeSocial.edunity.model.Tema;
import com.redeSocial.edunity.repository.TemaRepository;

@RestController
@RequestMapping ("/tema")
@CrossOrigin("*")
public class TemaController {

	@Autowired
	private TemaRepository temaRepository;
	
	@GetMapping
	public ResponseEntity<List<Tema>> GetAll(){
		return ResponseEntity.ok(temaRepository.findAll());
	}
	
	@GetMapping ("/{id}")
	public ResponseEntity<Tema> GetById(@PathVariable long id){
		return temaRepository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	
	
	
}
