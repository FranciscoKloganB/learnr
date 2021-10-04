<template>
  <div>
    <app-card>
      <template v-slot:header>
        <app-card-header v-bind:text="title" v-cloak/>
      </template>
      <template v-slot:default>
        <p>{{ description }}</p>
        <app-anchor v-bind:anchorLink="link">View resource</app-anchor>
      </template>
      <template v-slot:footer>
        <button class="button is-danger is-light" v-on:click="deleteResource">Remove</button>
      </template>
    </app-card>
  </div>
</template>

<script>
import AppAnchor from '../ui/AppAnchor.vue'
import AppCard from '../ui/AppCard.vue'
import AppCardHeader from '../ui/AppCardHeader.vue'

export default { 
  components: {
    AppAnchor,
    AppCard,
    AppCardHeader
  },
  inject: ['onDeleteResourceItem'],
  props: {
    slug: String,
    title: String,
    description: String,
    link: String
  },
  methods: {
    deleteResource() {
      this.onDeleteResourceItem(this.slug);
    }
  }
};
</script>
