import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Help from '../views/Help'
import Inspiration from '../views/Inspiration'
import Awards from '../views/Awards'
import Resources from '../views/Resources'
import Sikkerhet from '../views/Sikkerhet'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/inspiration',
    name: 'Inspiration',
    component: Inspiration
  },
  {
    path: '/awards',
    name: 'Awards',
    component: Awards
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/sikkerhet',
    name: 'Sikkerhet',
    component: Sikkerhet,
  },
  {
    path: '/bygg',
    name: 'Bygg',
  },
  {
    path: '/lagring',
    name: 'Lagring',
  },
  {
    path: '/integrasjoner',
    name: 'Integrasjoner',
  },
  {
    path: '/overvakning',
    name: 'Overvakning',
  },
];

const router = new VueRouter({
  routes
});

export default router
