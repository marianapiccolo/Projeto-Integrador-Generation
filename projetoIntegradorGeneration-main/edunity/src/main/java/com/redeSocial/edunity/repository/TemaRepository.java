package com.redeSocial.edunity.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.redeSocial.edunity.model.Tema;


@Repository
public interface TemaRepository extends JpaRepository<Tema, Long> {
	//public List<Tema> findAllByTituloContainingIgnoreCase (String titulo);

}
