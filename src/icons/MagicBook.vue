<template>
    <span v-bind="$attrs"
          :aria-hidden="title ? null : true"
          :aria-label="title"
          class="custom-icon"
          role="img"
          @click="$emit('click', $event)">
      <svg :fill="fillColor"
           class="custom-icon__svg"
           :width="size"
           :height="size"
           viewBox="0 -960 960 960">
        <path d="M200-313q10-3 19.5-5t20.5-2h40v-480h-40q-17 0-28.5 11.5T200-760v447Zm40 233q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h280v80H360v480h240v-120h80v200H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-320h80v400H240Zm-40-233v-487 487Zm500-167q0-92 64-156t156-64q-92 0-156-64t-64-156q0 92-64 156t-156 64q92 0 156 64t64 156Z">
          <title v-if="title">{{ title }}</title>
        </path>
      </svg>
    </span>
  </template>
  
  <script>
  export default {
    name: "CustomIcon",
    emits: ['click'],
    props: {
      title: {
        type: String,
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
  