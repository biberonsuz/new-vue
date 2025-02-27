<script setup>
import { useRoute } from 'vue-router';
import { projects } from '../data/projects.js';

const categoriesSet = new Set();
projects.forEach(project => {
    project.categories.forEach(category => {
        categoriesSet.add(category);
    });
});
const uniqueCategories = Array.from(categoriesSet);

const slugify = (category) => {
  return category.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
};
const route = useRoute();
</script>

<template>
  <div>
    <ul class="categories">
      <li v-for="category in uniqueCategories" :key="category" :id="category"
          :class="{ active: slugify(category) === route.params.category }">
        <router-link :to="`/${slugify(category)}`">{{ category }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
 ul.categories {
    display:flex;
    gap:1em;
    padding-inline-start: 0;
    margin-bottom:2.3em;
    margin-top:1em;
 }

 ul.categories li {
    border:1px solid var(--color-text);
    border-radius:1.5em;
    list-style-type: none;
    padding:.75em;
    line-height:.75;
    font-weight: 450;
    transition:.25s;
 }

 ul.categories li.active {
    background: var(--color-text);
    color: var(--color-background);
 }

 ul.categories li:hover {
    cursor:pointer;
    background: var(--color-text);
    color: var(--color-background) !important;
 }

 ul.categories li:hover a,  ul.categories li.active a {
    color:var(--color-background);
  }

 @media (max-width: 760px) {
  ul.categories {
    flex-wrap:wrap;
    gap:.5rem;
    margin-right:4.8rem;
    margin-bottom:0;
  }
  ul.categories li {
    white-space:nowrap;
    font-size:.85rem;
    border-radius:1em;
    list-style-type: none;
    padding:.5em;
  }
}
</style>
