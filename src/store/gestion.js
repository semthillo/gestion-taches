import { defineStore } from "pinia";

export const useGestionStore = defineStore('gestion', {
    state: () => ({
      taches: [],
      projets: [],
    }),
    actions: {
      addtaches(obj) {
        taches.value.push(obj);
      },
  
      remove (index) {
        taches.value.splice(index, 1);
      },

      edit  (index, titre, auteur, annee, genre)  {
        taches.value[index] = { titre, auteur, annee, genre };
      },
      
      initiateEdit (index) {
        const taches = taches.value[index];
        formComponent.value.edit(tache, index);
      },



      
      addprojets(obj) {
        projets.value.push(obj);
      },
  
      remove (index) {
        projets.value.splice(index, 1);
      },

      edit  (index, titre, auteur, annee, genre) {
        projets.value[index] = { titre, auteur, annee, genre };
      },
      
      initiateEdit (index) {
        const projets = projets.value[index];
        formComponent.value.edit(projet, index);
      },
    },
  })