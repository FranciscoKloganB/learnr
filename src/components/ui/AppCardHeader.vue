<template>
  <p class="card-header-title">{{ text }}</p>
  <button class="card-header-icon" aria-label="more options">
    <span class="icon"><i class="fas fa-angle-down" aria-hidden="true"></i></span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>
