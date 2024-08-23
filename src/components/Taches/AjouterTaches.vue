<template>
  <div >
    <h3>Ajouter une Nouvelle Tâche</h3>
    <form @submit.prevent="ajouterTache">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom de la Tâche</label>
        <input type="text" class="form-control" id="nom" v-model="nouvelleTache.nom" required />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" v-model="nouvelleTache.description" required></textarea>
      </div>
      <div class="mb-3">
        <label for="dateDebut" class="form-label">Date de Début</label>
        <input type="date" class="form-control" id="dateDebut" v-model="nouvelleTache.Date_debut" required />
      </div>
      <div class="mb-3">
        <label for="dateFin" class="form-label">Date de Fin</label>
        <input type="date" class="form-control" id="dateFin" v-model="nouvelleTache.Date_fin" required />
      </div>
      <div class="mb-3">
        <label for="projet" class="form-label">Projet</label>
        <input type="text" class="form-control" id="projet" v-model="nouvelleTache.projet" required />
      </div>
      <button type="submit" class="btn btn-primary">Ajouter une Tâche</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useGestionStore } from '../../store/gestion';

const store = useGestionStore();
const nouvelleTache = ref({ nom: '', description: '', Date_debut: '', Date_fin: '', projet: '' });

function ajouterTache() {
  store.addTache(nouvelleTache.value.nom, nouvelleTache.value.description, nouvelleTache.value.Date_debut, nouvelleTache.value.Date_fin, nouvelleTache.value.projet);
  
  nouvelleTache.value = { nom: '', description: '', Date_debut: '', Date_fin: '', projet: '' };
}
</script>

<style scoped>

</style>
