<template>
  <teleport to="body">
    <div v-on:click="$emit('dialogClosed')"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <footer>
        <slot name="footer">
          <button v-on:click="$emit('dialogClosed')">Okay</button>
        </slot>
      </footer>
    </dialog>
  </teleport>
</template>

<script>
export default {
  emits: ['dialogClosed'],
  props: {
    title: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
</style>
