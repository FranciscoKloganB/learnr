<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">{{ text }}</a>
    <div class="navbar-dropdown">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>