<script setup>
import Intro from './components/Intro.vue'
import Projects from './components/Projects.vue'
</script>

<template>
  <header></header>
  <section class="intro">
    <Intro msg="Lorem ipsum dolor sit amet" />
  </section>
  <main>
    <Projects />
  </main>
  <footer>
    <Contact />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  min-width:100%;
}

section.intro {
  min-height:100vh;
  min-width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

main {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:1em;
  min-width:100%;
  padding:5em 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
