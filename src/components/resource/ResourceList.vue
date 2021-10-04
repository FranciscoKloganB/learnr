<template>
  <resource-item class="column is-one-quarter"
    v-for="resource in resources"
    v-bind="resource"
    v-bind:key="resource.slug"
  />
</template>

<script>
import ResourceItem from './ResourceItem.vue';

export default {
  components: {
    ResourceItem
  },
  props: {
    resources: Array
  }
};
</script>
