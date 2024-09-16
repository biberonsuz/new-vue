<script setup>
import { projects } from '../data/projects.js';

const categoriesSet = new Set();
projects.forEach(project => {
    project.categories.forEach(category => {
        categoriesSet.add(category);
    });
})
const uniqueCategories = Array.from(categoriesSet);
</script>

<template>
  <div>
    <ul class="categories">
      <li v-for="category in uniqueCategories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<style scoped>
 ul.categories {
    display:flex;
    gap:1em;
    padding-inline-start: 0;
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
    color: var(--color-background);
 }
</style>