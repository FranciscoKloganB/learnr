<template>
  <div class="navbar-start" :class="{ centerStart: isCenterStart}">
    <slot name="start"></slot>
  </div>

  <div v-if="!isCenterStart" class="navbar-end">
    <slot name="end"></slot>
  </div>
</template>

<script>
export default {
  props: {
    isCenterStart: {
      type: Boolean,
      required: false,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
  .centerStart {
    flex-grow: 1;
    justify-content: center;
  }
</style>