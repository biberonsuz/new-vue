<template>
  <header>
    <nav></nav>
  </header>
  
  <router-view></router-view>
  
  <footer>
    <Contact />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  min-width: 100%;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
