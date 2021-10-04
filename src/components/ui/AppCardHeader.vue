<template>
  <p class="card-header-title">{{ text }}</p>
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
