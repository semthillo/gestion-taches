<template>
    <div>
      <h3>Ajouter un nouveau Projet</h3>
      <form @submit.prevent="ajouterProjet">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom du Projet</label>
          <input
            type="text"
            class="form-control"
            id="nom"
            v-model="nouveauProjet.nom"
            required
          />
        </div>
        <div class="mb-3">
          <label for="dateDebut" class="form-label">Date de Début</label>
          <input
            type="date"
            class="form-control"
            id="dateDebut"
            v-model="nouveauProjet.dateDebut"
            required
          />
        </div>
        <div class="mb-3">
          <label for="dateFin" class="form-label">Date de Fin</label>
          <input
            type="date"
            class="form-control"
            id="dateFin"
            v-model="nouveauProjet.dateFin"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Ajouter un Projet</button>
      </form>
    </div>
  </template>
  
  
  