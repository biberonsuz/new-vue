<script setup>
defineProps({
  url: {
    type: String,
    required: true
  },
  coverType: {
    type: String,
    required: true
  },
  coverFonts: {
    type: Array,
    required: true
  },
  coverText: {
    type: String,
    required: true
  },
  coverTextStyle: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
})
</script>

<template>
  <a :href="url" class="item__container">
    <div class="item">
      <template v-if="coverType == 'image'">
        <img :src="imageUrl" class="image" />
      </template>
      <template v-else-if="coverType == 'font'">
        <div class="cover-specimen">
          <div v-html="coverText" v-for="coverFont in coverFonts" :style="`font-family:${coverFont};${coverTextStyle}`" >
          </div>
        </div>
      </template>
      <div class="details">
        <i>
          <slot name="icon"></slot>
        </i>
        <h1>
          <slot name="heading"></slot>
        </h1>
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
  margin-bottom: 2em;
  display: flex;
  position: relative;
  gap:3em;
  width:min-content;
}
.project.right .item {
  flex-direction: row-reverse;
}
.project.bottom .item {
  flex-direction: column-reverse;
}
.item img.image {
  max-height:80vh;
  min-height:70vh;
  filter: drop-shadow(0 .5em .75em var(--vt-c-black-mute-transparent));
}
.cover-specimen {
  display:flex;
  flex-direction: column;
  justify-content: center;
}
.cover-specimen div {
  white-space: nowrap;
}
.item:hover {
  cursor:pointer;
}
.details {
  /* z-index:3; */
  position:relative;
  min-width:35rem;
  max-width:35rem;
  margin-top:2em;
}
i {
  display: inline-flex;
  place-items: center;
  place-content: center;
  transform: translateY(12%);
  margin-right:.75em;
}
h1 {
  display: inline;
}
p {
  margin:1em 0;
  font-weight: 450;
}
@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    width:min-content;
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
@media (max-width: 760px) {
  .item {
    max-width:calc(100vw - 2em);
    min-width:100%;
    gap:0;
    margin-top:0;
    margin-bottom: 0;
  }
  .item img.image {
    max-height:55svh;
    min-height:40svh;
    width:150vw;
    display: block;
    object-fit: contain;
    object-position: left bottom;
    /* min-width:100%; */
  }
  .details {
    max-width:100%;
    min-width:auto;
    margin-top:1em;
  }
  .project .item {
    min-height:80dvh;
    flex-direction:column !important;
    justify-content: end;
  }
  .cover-specimen div {
    /* font-size:8rem !important; */
    line-height:.82 !important;
    margin-left:0 !important;
  }
}
</style>
