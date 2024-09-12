<script setup>
import Intro from '../components/Intro.vue'
import Projects from '../components/Projects.vue'
</script>

<template>
  <section class="intro">
    <Intro msg="Lorem ipsum dolor sit amet. Consectetur adipiscing elit." />
  </section>
  <main>
    <Projects />
  </main>
  <footer>
    <Contact />
  </footer>
</template>

<style scoped>
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
  grid-template-columns: 1fr;
  grid-gap:2em;
  min-width:100%;
  padding:5em 0;
  min-height:100vh;
}
@media (min-width: 1024px) {
  main {
    grid-template-columns: 1fr 1fr;
  }
}
</style>