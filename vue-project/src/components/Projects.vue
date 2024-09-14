<script setup>
import { ref } from 'vue';
import Project from './Project.vue';
import { projects as projectData } from '../data/projects.js';

// Load all the icons from the local icons folder at build time
const icons = import.meta.glob('../icons/*.vue');

// Dynamically load the icon component using import.meta.glob
const loadIcon = async (iconName) => {
  const cleanIconName = String(iconName).trim(); // Clean the icon name
  console.log(`Loading icon: "${cleanIconName}"`);

  // Dynamically get the correct import path
  const iconPath = `../icons/${cleanIconName}.vue`;

  try {
    // Check if the path exists in the loaded icons
    if (icons[iconPath]) {
      return await icons[iconPath](); // Load the icon dynamically
    } else {
      console.error(`Icon "${cleanIconName}" not found. Falling back to default.`);
      return await icons['../icons/AlertCircle.vue'](); // Fallback to default icon
    }
  } catch (error) {
    console.error(`Error importing icon: ${cleanIconName}.`, error);
    return await icons['../icons/AlertCircle.vue'](); // Fallback to default icon
  }
};

// Store projects data with their icon components
const projects = ref([]);

const loadIconsForProjects = async () => {
  projects.value = await Promise.all(
    projectData.map(async (project) => {
      const iconComponent = (await loadIcon(project.icon || 'AlertCircle')).default;
      return {
        ...project,
        iconComponent, // Dynamically assign the resolved icon component
      };
    })
  );
};

loadIconsForProjects();
</script>

<template>
  <div class="project" v-for="project in projects" :key="project.id">
    <Project :imageUrl="project.coverMedia || ''" :url="`/projects/${project.id}`">
      <template #icon>
        <component :is="project.iconComponent" :size="30" class="project-icon"  />
      </template>
      <template #heading>{{ project.name }}</template>
      <template #info>{{ project.shortDescription }}</template>
    </Project>
  </div>
</template>
<style scoped>
</style>
