<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 v-html="msg"></h1>
    <h3></h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 450;
  position: relative;
  top: -10px;
}

:deep(h1 a) {
  text-decoration: underline !important;
  text-underline-offset: .25em;
  cursor:pointer;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
