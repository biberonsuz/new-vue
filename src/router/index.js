import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectPage from '../views/ProjectPage.vue';
import CategoryPage from '../views/CategoryPage.vue';

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
  },
  {
    path: '/:category',
    name: 'Category',
    component: CategoryPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;
