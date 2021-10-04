<template>
  <a v-bind:href="anchorLink" target="_blank" rel="noreferrer noopener">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    anchorLink: {
      type: String,
      required: true,
    }
  }
}
</script>
