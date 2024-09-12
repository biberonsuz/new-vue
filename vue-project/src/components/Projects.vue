<script setup>
import Project from './Project.vue'
import IconPodcast from './icons/IconPodcast.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconPodcast.vue'
import SupportIcon from './icons/IconSupport.vue'
import { projects } from '../data/projects.js';
</script>

<template>
  <div v-for="project in projects" :key="project.id">
    <Project :imageUrl="project.coverImage || ''" :url="`/projects/${project.id}`">
      <template #icon>
        <IconPodcast />
      </template>
      <template #heading>{{ project.name }}</template>
    </Project>
  </div>
</template>
