<script setup>
import Intro from '../components/Intro.vue'
import Categories from '../components/Categories.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
</script>

<template>
  <section class="intro">
    <Intro msg="Hi, I'm Pınar! &#128075; I deliver projects in <a href='/ui-ux-design'>UI/UX Design</a>, <a href='/front-end-development'>Front End Development</a>, <a href='/type-design'>Type Design</a> and <a href='/vr-ar-design'>VR/AR Design</a>." />
  </section>
  <Categories />
  <main>
    <Projects />
  </main>
  <Contact />
</template>

<style scoped>
section.intro {
  min-height:100vh;
  min-width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align:center end;
}
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
  padding-bottom:1em;
}
.project:first-child {
  min-height:calc(100dvh - 7.6em);
  max-height:calc(100dvh - 7.6em);
}
.categories {
  margin-top:1em;
}
</style>