<script setup>
import Project from '../components/Project.vue';
import Contact from '../components/Contact.vue';
import Categories from '../components/Categories.vue'
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects as projectData } from '../data/projects';

const route = useRoute();
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

const projects = ref([])
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
const props = defineProps(['category']);
const displayCategory = computed(() => {
  return props.category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});
const filteredProjects = computed(() => {
  const normalizeCategory = (category) => {
    return category
      .toLowerCase()
      .replace(/-/g, ' ')  // Replace hyphens with spaces (URL-friendly)
      .replace(/\//g, ' '); // Replace slashes with spaces (in case of "UI/UX Design")
  };
  const normalizedCategory = normalizeCategory(props.category);
  return projects.value.filter((project) =>
    project.categories.some((cat) => normalizeCategory(cat) === normalizedCategory)
  );
});
</script>

<template>
  <Categories />
  <main>
    <div class="project" :class="project.coverLayout" v-for="project in filteredProjects" :key="project.id">
      <Project :coverType="project.coverType" :url="`projects/${project.id}`" :imageUrl="project.coverMedia || ''" :coverFonts="project.coverFonts || ''" :coverText="project.coverText || ''" :coverTextStyle="project.coverTextStyle || ''">
        <template #icon>
            <component :is="project.iconComponent" :size="42" class="project-icon"  />
        </template>
        <template #heading>{{ project.name }}</template>
        <template #info>{{ project.shortDescription }}</template>
      </Project>
    </div>
  </main>
  <Contact />
</template>
<style scoped>
main {
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows:1fr;
  grid-gap:7em;
  min-width:100%;
  padding:2em 0;
  /* min-height:100vh; */
}
.project .item {
  padding-bottom: 20px;
}
.project {
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  scroll-snap-align: end;
  min-height:100dvh;
  padding-bottom:2em;
}
.project:first-child {
  min-height:calc(100dvh - 7.6em);
  max-height:calc(100dvh - 7.6em);
}
@media (max-width: 760px) {
  .project {
    padding-bottom:1em;
  }
}
</style>
  