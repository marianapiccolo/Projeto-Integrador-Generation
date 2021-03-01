package com.redeSocial.edunity.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.redeSocial.edunity.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	/*public List<Usuario> findAllByNameContainingIgnoreCase (String nome_completo);*/
}
