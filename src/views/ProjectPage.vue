<script setup>
import Contact from '../components/Contact.vue'
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { projects as projectData } from '../data/projects.js';

const route = useRoute();
const projectId = ref(parseInt(route.params.id));
const project = ref(null);
const loading = ref(true);

const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};
onMounted(() => {
  scrollToTop();
});
watch(route, () => {
  scrollToTop();
});

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
const loadProjectIcon = async (selectedProject) => {
  const iconComponent = (await loadIcon(selectedProject.icon || 'AlertCircle')).default;
  return {
    ...selectedProject,
    iconComponent,
  };
};
watch(() => route.params.id, async (newId) => {
  projectId.value = parseInt(newId);
  const selectedProject = projectData.find(p => p.id === projectId.value);
  if (selectedProject) {
    project.value = await loadProjectIcon(selectedProject);
    loading.value = false;
  } else {
    console.error('Project not found');
    project.value = null;
    loading.value = false;
  }
});

const loadInitialProject = async () => {
  const selectedProject = projectData.find(p => p.id === projectId.value);
  if (selectedProject) {
    project.value = await loadProjectIcon(selectedProject);
    loading.value = false;
  } else {
    console.error('Project not found');
    loading.value = false;
  }
};
loadInitialProject();

</script>

<template>
  <section v-if="!loading && project" class="project">
    <section class="project-cover">
      <i v-if="project.iconComponent">
        <component :is="project.iconComponent" :size="42" class="project-icon" />
      </i>
      <h1>{{ project.name }}</h1>
      <p>{{ project.description }}</p>
    </section>
    <section class="project-content">
      <div class="slide" v-for="(media, index) in project.contentMedia" :key="index">
        <img v-if="isImage(media)" :src="media" :alt="'Content image ' + index" />
        <video v-else muted autoplay loop>
          <source :src="media" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p></p>
    </section>
  </section>
  <div v-else-if="!loading">
    <p>Project not found</p>
  </div>
  <Contact />
</template>

<script>
function isImage(media) {
  const decodedUrl = decodeURIComponent(media);
  const fileName = decodedUrl.split('?')[0];
  const result = /\.(jpg|jpeg|png|gif)$/i.test(fileName);
  return result;
}

</script>

<style scoped>
.project-cover {
  margin: 25% 0 5%;
  scroll-snap-align: end;
}
i {
  display: inline-flex;
  place-items: center;
  place-content: center;
  transform: translateY(12%);
  margin-right:.75em;
}
.project-cover h1 {
  display:inline;
}
.project-cover p {
  margin-bottom: 7em;
}
.project-content {
  display: flex;
  flex-direction: column;
  gap: 7em;
}
.project-content .slide {
  scroll-snap-align: end;
  min-height: 90vh;
}
.project-content img,
.project-content video,
.project-cover img {
  max-height: 85vh;
  min-height: 70vh;
  max-width:100%;
  filter: drop-shadow(0 .5em .75em var(--vt-c-black-mute-transparent));
  margin:auto;
  display:block;
}
.project-content video {
  border-radius: .6em;
}
</style>
