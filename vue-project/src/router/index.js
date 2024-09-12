import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';  // Import the components
import ProjectPage from '../views/ProjectPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects/:id',  // Dynamic route
    name: 'ProjectPage',
    component: ProjectPage,
    props: true,  // Allows route params to be passed as props
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
