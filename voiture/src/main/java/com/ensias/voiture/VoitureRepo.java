package com.ensias.voiture;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VoitureRepo extends CrudRepository<Voiture, Integer> {
    List<Voiture> findAll();
}
