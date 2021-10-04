<template>
  <navbar-item
    v-for="item in items"
    v-bind:key="item.tab"
    v-bind:text="item.text"
    v-bind:tab="item.tab"
    v-bind:class="{ 'is-active': item.tab === activeTab }"
    v-on:tabSwitched="handleTabSwitch"
  />
</template>

<script>
import NavbarItem from './NavbarItem.vue';

export default {
  components: {
    NavbarItem
  },
  emits: ['tabSwitched'],
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTab: 'ResourceList'
    };
  },
  methods: {
    handleTabSwitch(tabId) {
      this.activeTab = tabId;
      this.$emit('tabSwitched', tabId);
    }
  }
};
</script>
