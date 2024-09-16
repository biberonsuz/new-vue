<script setup>
import { ref } from 'vue';
import Project from './Project.vue';
import { projects as projectData } from '../data/projects.js';

const icons = import.meta.glob('../icons/*.vue');
const loadIcon = async (iconName) => {
  const cleanIconName = String(iconName).trim();
  const iconPath = `../icons/${cleanIconName}.vue`;
  try {
    if (icons[iconPath]) {
      return await icons[iconPath]();
    } else {
      console.error(`Icon "${cleanIconName}" not found. Falling back to default.`);
      return await icons['../icons/AlertCircle.vue']();
    }
  } catch (error) {
    console.error(`Error importing icon: ${cleanIconName}.`, error);
    return await icons['../icons/AlertCircle.vue']();
  }
};
const projects = ref([]);
const loadIconsForProjects = async () => {
  projects.value = await Promise.all(
    projectData.map(async (project) => {
      const iconComponent = (await loadIcon(project.icon || 'AlertCircle')).default;
      return {
        ...project,
        iconComponent,
      };
    })
  );
};
loadIconsForProjects();
</script>

<template>
  <div class="project" v-for="project in projects" :key="project.id">
    <Project :imageUrl="project.coverMedia || ''" :url="`#/projects/${project.id}`">
      <template #icon>
        <component :is="project.iconComponent" :size="42" class="project-icon"  />
      </template>
      <template #heading>{{ project.name }}</template>
      <template #info>{{ project.shortDescription }}</template>
    </Project>
  </div>
</template>
<style scoped>
.project {
  scroll-snap-align: end;
  min-height:87vh;
}
</style>
