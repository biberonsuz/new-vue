<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="item__container">
    <div class="item">
      <img :src="imageUrl" class="image" />
      <div class="details">
        <i>
          <slot name="icon"></slot>
        </i>
        <h2>
          <slot name="heading"></slot>
        </h2>
        <p>
          <slot name="info"></slot>
        </p>
        <button class="more">View More</button>
      </div>
    </div>
  </a>
</template>

<style scoped>
a.item__container {
  display:block;
}
.item {
  margin-top: 3em;
  display: flex;
  position: relative;
  gap:3em;
  width:min-content;
}
.project:nth-child(even) .item {
  flex-direction: row-reverse;
}
.item img.image {
  max-height:90vh;
  min-height:70vh;
  filter: drop-shadow(0 .5em .75em var(--vt-c-black-mute-transparent));
}
.item:hover {
  cursor:pointer;
}

.details {
  z-index:3;
  position:relative;
  min-width:35rem;
  margin-top:2em;
}

i {
  display: inline-flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: auto;
  transform: translateY(12%);
  margin-right:.5em;
  color: var(--color-text);
}


h2 {
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--color-heading);
  display: inline;
}
p {
  margin:1em 0;
  font-weight: 400;
}
@media (min-width: 1024px) {
  .item {
    margin-top: 0;
  }

  i {
  }

  .item:before {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
