<template>
    <div>
      <h3>Liste des Projets</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date de Début</th>
            <th>Date de Fin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.name }}</td>
            <td>{{ task.description }}</td>
            <td>{{ getProjectName(task.projectId) }}</td>
            <td>{{ task.startDate }}</td>
            <td>{{ task.endDate }}</td>
            <td>
              <button class="btn btn-primary btn-sm" @click="editTask(task.id)"><i class="bi bi-pencil-square"></i>Modifier</button>
              <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)"><i class="bi bi-trash"></i>Supprimer</button>
              <button class="btn btn-danger btn-sm" @click="descriptionTask(task.id)"><i class="bi bi-eye"></i>Description</button>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link to="/tasks/new" class="btn btn-success">Ajouter une Tâche</router-link>
    </div>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  