<template>
  <div>
    <h3>Liste des Tâches</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Description</th>
          <th>Date de Début</th>
          <th>Date de Fin</th>
          <th>Projet</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tache, index) in store.taches" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ tache.nom }}</td>
          <td>{{ tache.description }}</td>
          <td>{{ tache.Date_debut }}</td>
          <td>{{ tache.Date_fin }}</td>
          <td>{{ tache.projet }}</td>
          <td>
            <button class="btn btn-primary btn-sm" @click="editTache(index)"><i class="bi bi-pencil-square"></i>Modifier</button>
            <button class="btn btn-danger btn-sm" @click="removeTache(index)"><i class="bi bi-trash"></i>Supprimer</button>
            <button class="btn btn-info btn-sm" @click="showDetails(tache)"><i class="bi bi-eye"></i>Détails</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useGestionStore } from '../../store/gestion';

const store = useGestionStore();
 const newTache = { nom: '', Date_debut: '', Date_fin: '', projet: '' };

function editTache(index) {
  store.editTache(index, newTache.nom, newTache.Date_debut, newTache.Date_fin, newTache.projet);
}

function removeTache(index) {
  store.removeTache(index);
}

function showDetails(tache) {
  alert(`Nom: ${tache.nom}\nDescription: ${tache.description}\nDate de Début: ${tache.Date_debut}\nDate de Fin: ${tache.Date_fin}\nProjet: ${tache.projet}`);
}
</script>

<style scoped>

</style>
