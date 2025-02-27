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
  <div class="project" :class="project.coverLayout" v-for="project in projects" :key="project.id">
    <Project :coverType="project.coverType" :url="`projects/${project.id}`" :imageUrl="project.coverMedia || ''" :coverFonts="project.coverFonts || ''" :coverText="project.coverText || ''" :coverTextStyle="project.coverTextStyle || ''">
      <template #icon>
        <component :is="project.iconComponent" :size="42" class="project-icon"  />
      </template>
      <template #heading>{{ project.name }}</template>
      <template v-slot:info><p v-html="project.shortDescription"></p></template>
    </Project>
  </div>
</template>
<style scoped>
.project {
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  scroll-snap-align: end;
  min-height:100dvh;
  padding-bottom:1em;
}
.project:first-child {
  min-height:calc(100dvh - 7.6em);
  max-height:calc(100dvh - 7.6em);
}
</style>
