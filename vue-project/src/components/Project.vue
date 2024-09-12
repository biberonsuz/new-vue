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
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <div class="item">
      <!-- <div class="overlay-shadow disappear"></div> -->
      <div :style="{ backgroundImage: 'url(' + imageUrl + ')' }" class="image"></div>
      <div class="details">
        <i>
          <slot name="icon"></slot>
        </i>
        <h3>
          <slot name="heading"></slot>
        </h3>
      </div>
    </div>
  </a>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
}
.item .image {
  min-width:100%;
  background-repeat:no-repeat;
  background-position: top;
  background-size: contain;
  aspect-ratio: 16 / 9;
  filter: drop-shadow(0 .5em .75em var(--vt-c-black-mute-transparent));
}
.item:hover {
  cursor:pointer;
}
.overlay-shadow {
  top:0;
  left:0;
  height:100%;
  width:100%;
  position: absolute;
  background: linear-gradient(transparent, transparent, transparent, var(--vt-c-black-mute-transparent));
  border-radius: .9em;
  z-index:1;
}

.details {
  /* flex: 1; */
  /* margin-left: 1rem; */
  margin-top:1em;
  z-index:3;
  position:relative;
}

i {
  display: inline-flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: auto;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  display:inline;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    /* padding: 0.4rem 0 1rem calc(var(--section-gap) / 2); */
  }

  i {
    /* top: calc(50% - 25px); */
    /* left: -26px; */
    /* position: absolute; */
    /* border: 1px solid var(--color-border); */
    /* background: var(--color-background); */
    /* border-radius: 8px; */
  }

  .item:before {
    content: ' ';
    /* border-left: 1px solid var(--color-border); */
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    /* border-left: 1px solid var(--color-border); */
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
