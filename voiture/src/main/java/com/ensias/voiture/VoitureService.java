package com.ensias.voiture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoitureService {
    @Autowired
    private VoitureRepo voitureRepo;

    public List<Voiture> getAllVoitures() {
        return voitureRepo.findAll();
    }

    public Voiture getVoitureById(Integer id) {
        return voitureRepo.findById(id).orElse(null);
    }

    public Voiture addVoiture(Voiture voiture) {
        return voitureRepo.save(voiture);
    }

    public Voiture updateVoiture(Voiture voiture) {
        Voiture existingVoiture = voitureRepo.findById(voiture.getId()).orElse(null);
        existingVoiture.setMarque(voiture.getMarque());
        existingVoiture.setModele(voiture.getModele());
        existingVoiture.setCouleur(voiture.getCouleur());
        existingVoiture.setImmatricule(voiture.getImmatricule());
        existingVoiture.setAnnee(voiture.getAnnee());
        existingVoiture.setPrix(voiture.getPrix());
        return voitureRepo.save(existingVoiture);
    }

    public void deleteVoiture(Integer id) {
        voitureRepo.deleteById(id);
    }
}
