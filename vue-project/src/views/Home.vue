<script setup>
import Intro from '../components/Intro.vue'
import Categories from '../components/Categories.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

</script>

<template>
  <section class="intro">
    <Intro msg="Hi, I'm Pınar! &#128075; I am happy to discuss projects in UI/UX Design, Front End Development, VR/AR Design, Type Design and Creative Programming." />
  </section>
  <Categories />
  <main>
    <Projects />
  </main>
  <!-- <footer>
    <Contact />
  </footer> -->
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
  grid-template-rows:1fr;
  grid-gap:2em;
  min-width:100%;
  padding:2em 0;
  /* min-height:100vh; */
}
footer {
  background:var(--color-text);
  color:var(--color-background);
  min-height:100vh;
}
@media (min-width: 1024px) {
  main {
    grid-template-columns: 1fr 1fr;
  }
}
</style>