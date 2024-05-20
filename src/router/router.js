import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Client from '../components/Client.vue';
import admin_reservation from '../components/admin_reservation.vue';
import admin_ressource from '../components/admin_ressource.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Client',
    name: 'Client',
    component: Client
  },
  {
    path: '/AdminReservation',
    name: 'AdminReservation',
    component: admin_reservation
  },
  {
    path: '/AdminRessource',
    name: 'AdminRessource',
    component: admin_ressource
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
