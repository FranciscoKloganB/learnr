<template>
  <div class="card">
    <header class="card-header">
      <slot name="header"></slot>
    </header>
    <div class="card-content">
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <footer class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '~bulma';
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  .card-footer {
    margin-top: auto;
    :deep(*) {
      @extend .card-footer-item;
    }
  }
}
</style>
