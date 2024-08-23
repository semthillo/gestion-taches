import { createRouter, createWebHashHistory } from "vue-router";

import Accueil from "../components/Accueil.vue";
import Projet from "../components/Projets/Projet.vue"
import Tache from "../components/Taches/Tache.vue";
import AjouterProjet from "../components/Projets/AjouterProjet.vue"




const routes=[
  { path: "/", component: Accueil},
  { path: "/Projet", component: Projet },
  { path: "/Taches", component: Tache },
  { path: "/AjouterProjet", component: AjouterProjet },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
