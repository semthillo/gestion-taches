<script setup>
import { ref } from 'vue';
import { useGestionStore } from '../store/gestion';
import ListerProjet from './Projets/ListerProjet.vue';
import AjouterTaches from './Taches/AjouterTaches.vue';
import ListeTaches from './Taches/ListeTaches.vue';
import AjouterProjet from './Projets/AjouterProjet.vue';

const showForm = ref(false); 
const showFormP = ref(false)
const store = useGestionStore();

function toggleForm() {
  showForm.value = !showForm.value; 
}
function toggleFormP(){
  showFormP.value = !showFormP.value; 
}

(function () {
  "use strict";
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();
</script>

<template>
  <div class="content d-flex">
    <main>
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg>
          <span class="fs-4">Gestion De Tache</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Accueil</router-link>
          </li>
          <li>
            <router-link class="nav-link text-white" to="/projet" @click="store.task = true">Mes Projets</router-link>
          </li>
          <li>
            <router-link class="nav-link text-white" to="/Taches" @click="store.task = false">Mes Tâches</router-link>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://images.pexels.com/photos/5685962/pexels-photo-5685962.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="32" height="32" class="rounded-circle me-2" />
            <strong>Aichetou Gaye</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Déconnexion</a></li>
          </ul>
        </div>
      </div>
    </main>
   
         <div class="contentss" v-if="store.task">
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Rechercher..." aria-label="Search" />
            <button type="button" class="btn btn-secondary">Recherche</button>
          </form>
          <button type="button" class="btn btn-dark" @click="toggleFormP">
            Ajouter Un Projet
          </button>
        </div>
      </nav>
      <div class="">
        <ListerProjet />
      </div>
    </div>

    <div class="contentss" v-else>
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Rechercher..." aria-label="Search" />
            <button type="button" class="btn btn-secondary">Recherche</button>
          </form>
          <button type="button" class="btn btn-dark" @click="toggleForm">Ajouter Une Tâche</button>
        </div>
      </nav>
      <div class="">
        <ListeTaches />
      </div>
    </div>

    <div v-if="showForm">
      <AjouterTaches />

    </div>
    <div v-if="showFormP">
      <AjouterProjet />

    </div>

    
 
  </div>
</template>

<style scoped>
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html {
  height: -webkit-fill-available;
}

main {
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  width: 25%;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}
.contentss {
  width: 65%;
  display: flex;
  flex-direction: column;
}
.navbar {
  width: 100%;
}
.b-example-divider {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.bi {
  vertical-align: -0.125em;
  pointer-events: none;
  fill: currentColor;
}

.dropdown-toggle {
  outline: 0;
}

.nav-flush .nav-link {
  border-radius: 0;
}

.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
  background-color: transparent;
  border: 0;
}
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, 0.85);
  background-color: #d2f4ea;
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, 0.85);
}
.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  display: inline-flex;
  padding: 0.1875rem 0.5rem;
  margin-top: 0.125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}
.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold {
  font-weight: 600;
}
.lh-tight {
  line-height: 1.25;
}

</style>
