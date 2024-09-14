<template>
    <span
      v-bind="$attrs"
      :aria-hidden="title ? null : true"
      :aria-label="title"
      class="material-design-icon landscape-icon"
      role="img"
      @click="$emit('click', $event)"
    >
      <svg
        :fill="fillColor"
        class="material-design-icon__svg"
        :width="size"
        :height="size"
        viewBox="0 -960 960 960"
      >
        <path
          d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"
        />
        <title v-if="title">{{ title }}</title>
      </svg>
    </span>
  </template>
  
  <script>
  export default {
    name: "LandscapeIcon",
    emits: ['click'],
    props: {
      title: {
        type: String,
        default: ''
      },
      fillColor: {
        type: String,
        default: "currentColor"
      },
      size: {
        type: Number,
        default: 24
      }
    }
  }
  </script>
  
  <style scoped>
  .material-design-icon {
    display: inline-block;
    vertical-align: middle;
  }
  
  .material-design-icon__svg {
    display: block;
  }
  </style>
  