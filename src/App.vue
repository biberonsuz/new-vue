<template>
  <header>
    <nav></nav>
  </header>
  <transition name="fade">
    <router-view></router-view>
  </transition>
  <footer>
  </footer>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
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
