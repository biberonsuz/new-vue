import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectPage from '../views/ProjectPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects/:id',
    name: 'ProjectPage',
    component: ProjectPage,
    props: true,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;
