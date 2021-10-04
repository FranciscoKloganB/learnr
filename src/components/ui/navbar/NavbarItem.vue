<template>
  <a class="navbar-item is-tab" v-on:click.prevent="activateTab">{{ text }}</a>
</template>

<script>
export default {
  props: {
    tab: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true
    }
  },
  emits: ['tabSwitched'],
  methods: {
    activateTab() {
      this.$emit('tabSwitched', this.tab)
    }
  }
}
</script>
