<script setup>
import { ref } from 'vue'
const showLinks = ref(false)
const toggleLinks = () => {
  showLinks.value = !showLinks.value
}
</script>

<template>
  <section class="contact">
    <button @click="toggleLinks">Contact</button>

    <transition name="fade-slide">
      <div v-if="showLinks" class="links">
        <a href="mailto:pinarkzk@gmail.com"><button>Email</button></a>
        <a href="www.linkedin.com/in/pınar-kazak-2a5989190" target="_blank" rel="noopener noreferrer"><button>LinkedIn</button></a>
        <a href="https://www.are.na/otomi-pinar/pinar" target="_blank" rel="noopener noreferrer"><button>Are.na</button></a>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: .5em;
}

@media (max-width: 760px) {
}

.links {
  display: flex;
  flex-direction: column;
  gap: .5em;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
