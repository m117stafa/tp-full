package com.ensias.voiture;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Voiture {

    @Id
    @GeneratedValue
    private Integer id;

    private String marque;

    private String modele;

    private String couleur;

    private String immatricule;

    private String annee;

    private String prix;
}
