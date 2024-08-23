import { defineStore } from 'pinia';

export const useGestionStore = defineStore('gestion', {
  state: () => ({
    taches: [
      { nom: 'Tâche 1', description: 'Description 1', Date_debut: '01-01-2024', Date_fin: '31-01-2024', projet: 'Projet 1' },
    ],
    projets: [
      { nom: 'Projet 1', description: 'Description du projet 1', date_debut: '01-01-2024', date_fin: '31-12-2024' },
    ],
    task: true ,
    formComponent : {} ,
  }),
  actions: {
    addTache(nom, description, Date_debut, Date_fin, projet) {
      this.taches.push({ nom, description, Date_debut, Date_fin, projet });
    },
    removeTache(index) {
      this.taches.splice(index, 1);
    },
    editTache(index, nom, Date_debut, Date_fin, projet) {
      this.taches[index] = { nom, description, Date_debut, Date_fin, projet };
    },
    initiateEdit  (index) {
      const tache = taches.value[index];
      formComponent.value.edit(tache, index);
    },
    addProjet(nom, description, date_debut, date_fin) {
      this.projets.push({ nom, description, date_debut, date_fin });
    },
    removeProjet(index) {
      this.projets.splice(index, 1);
    },
    editProjet(index, nom, description, date_debut, date_fin) {
      this.projets[index] = { nom, description, date_debut, date_fin };
    }
  }
});
