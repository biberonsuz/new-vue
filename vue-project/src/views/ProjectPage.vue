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
  <section v-if="project" class="project-cover">
    <h1>{{ project.name }}</h1>
    <img v-if="project.coverMedia" :src="project.coverMedia" alt="" />
    <section class="project-body">
      <img alt="" />
      <p></p>
    </section>
    
  </section>

  <div v-else>
    <p>Project not found</p>
  </div>
</template>

<style scoped>
.project {

}
h1 {}

</style>
