package com.redeSocial.edunity.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.redeSocial.edunity.model.UserLogin;
import com.redeSocial.edunity.model.Usuario;
import com.redeSocial.edunity.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {

	@Autowired
	private UsuarioRepository usuarioRepository;
	@Autowired
	private UsuarioService usuarioService;

	@PostMapping("/login")
	public ResponseEntity<UserLogin> Autentication(@RequestBody Optional<UserLogin> user) {
		return usuarioService.Logar(user).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> Post(@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(usuarioService.CadastrarUsuario(usuario));
	}
	
	@GetMapping
	public ResponseEntity<List<Usuario>> GetAll() {
		return ResponseEntity.ok(usuarioRepository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Usuario> GetById(@PathVariable long id) {
		return usuarioRepository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/usuario/{nome}")
	public ResponseEntity<List<Usuario>> GetByUsuario(@PathVariable String nome) {
		return ResponseEntity.ok(usuarioRepository.findAllByNomeContainingIgnoreCase(nome));
	}

	@PostMapping
	public ResponseEntity<Usuario> postUsuario(@RequestBody Usuario nome) {
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(nome));
	}

	@PutMapping
	public ResponseEntity<Usuario> putUsuario(@RequestBody Usuario nome) {
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(nome));
	}

	@DeleteMapping("/{id}")
	public void deleteUsuario(@PathVariable long id) {
		usuarioRepository.deleteById(id);
	}
}
