<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger"
        v-on:click="toggleNavBurger"
        v-bind:class="{ 'is-active': isNavBurgerOpen }"
        aria-label="menu"
        aria-expanded="false"
        data-target="the-navbar-menu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="the-navbar-menu" class="navbar-menu" v-bind:class="{ 'is-active': isNavBurgerOpen }">
      <slot name="menu"></slot>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavBurgerOpen: false
    };
  },
  methods: {
    toggleNavBurger() {
      this.isNavBurgerOpen = !this.isNavBurgerOpen;
    }
  }
};
</script>
