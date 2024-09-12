<script setup>
import { useRoute } from 'vue-router';
import { projects } from '../data/projects.js';

const route = useRoute();
const projectId = parseInt(route.params.id);

const project = projects.find(p => p.id === projectId);

if (!project) {
  console.error('Project not found');
}
</script>

<template>
  <div v-if="project">
    <h1>{{ project.name }}</h1>
    <img v-if="project.coverImage" :src="project.coverImage" alt="Project Image" />
    <p v-else>No image available for this project.</p>
  </div>

  <div v-else>
    <p>Project not found</p>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
