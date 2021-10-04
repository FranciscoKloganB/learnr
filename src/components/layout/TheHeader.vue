<template>
  <section class="hero is-primary is-medium">
    <div class="hero-body">
      <p class="title is-size-1">{{ title }}</p>
      <p class="subtitle is-size-4">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.hero {
  .hero-body {
    .title {
      font-family: 'Montserrat', sans-serif;
    }
    .subtitle {
      font-family: 'Source Code Pro', monospace;
    }
  }
}
</style>
