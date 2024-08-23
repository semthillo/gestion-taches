<script setup>
import { useGestionStore } from "../../store/gestion";

const store = useGestionStore();

function editProjet(index) {
  
  store.initiateEdit
  store.editProjet(
    index,
    newProjet.nom,
    newProjet.description,
    newProjet.date_debut,
    newProjet.date_fin
  );
}

function removeProjet(index) {
  store.removeProjet(index);
}

function showDetails(projet) {
  alert(
    `Nom: ${projet.nom}\nDescription: ${projet.description}\nDate de Début: ${projet.date_debut}\nDate de Fin: ${projet.date_fin}`
  );
}
</script>


<template>
  <div>
    <h3>Liste des Projets</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Date de Début</th>
          <th>Date de Fin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(projet, index) in store.projets" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ projet.nom }}</td>
          <td>{{ projet.date_debut }}</td>
          <td>{{ projet.date_fin }}</td>
          <td>
            <button class="btn btn-primary btn-sm" @click="editProjet(index)">
              <i class="bi bi-pencil-square"></i>Modifier
            </button>
            <button class="btn btn-danger btn-sm" @click="removeProjet(index)">
              <i class="bi bi-trash"></i>Supprimer
            </button>
            <button class="btn btn-info btn-sm" @click="showDetails(projet)">
              <i class="bi bi-eye"></i>Détails
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<style scoped>
/* Styles inchangés */
</style>
