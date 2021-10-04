<template>
  <div class="site">
    <the-header v-bind:title="'Learnr'" v-bind:subtitle="'Storing resources'" />
    <the-navbar>
      <template v-slot:menu>
        <the-navbar-menu v-bind:isCenterStart="false">
          <template v-slot:start>
            <navbar-item-list
              v-bind:items="navbarItems"
              v-on:tabSwitched="switchTab"
            />
          </template>
        </the-navbar-menu>
      </template>
    </the-navbar>
    <the-main class="m-6">
      <keep-alive>
        <component v-bind:is="activeTab" v-bind="getActiveTabProperties" />
      </keep-alive>
    </the-main>
    <the-footer />
  </div>
</template>

<script>
import NavbarItemList from './components/ui/navbar/NavbarItemList.vue';
import ResourceCreate from './components/resource/ResourceCreate.vue';
import ResourceList from './components/resource/ResourceList.vue';
import TheFooter from './components/layout/TheFooter.vue';
import TheMain from './components/layout/TheMain.vue';
import TheNavbar from './components/layout/TheNavbar.vue';
import TheNavbarMenu from './components/layout/TheNavbarMenu.vue';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    NavbarItemList,
    ResourceCreate,
    ResourceList,
    TheFooter,
    TheMain,
    TheNavbar,
    TheNavbarMenu,
    TheHeader
  },
  provide() {
    return {
      onDeleteResourceItem: this.deleteResourceItem,
      onCreateResourceItem: this.createResourceItem
    };
  },
  data() {
    return {
      activeTab: 'ResourceList',
      navbarItems: [
        {
          text: 'Add resource',
          tab: 'ResourceCreate'
        },
        {
          text: 'Show resources',
          tab: 'ResourceList'
        }
      ],
      resources: [
        {
          slug: 'vuejs-the-complete-guide/',
          title: 'Vue.js - The complete guide by Maximilian Schwarzmüller',
          description:
            "This bestselling course teaches the latest version of Vue (Vue.js 3) from the ground up and in great detail. We'll cover all the core basics but we'll not stop thereafter - this course also dives into advanced concepts like the Composition API introduced with Vue 3.",
          link: 'https://www.udemy.com/course/vuejs-2-the-complete-guide/'
        },
        {
          slug: 'vue-website',
          title: 'Vue.js official website',
          description:
            'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
          link: 'https://vuejs.org'
        },
        {
          slug: 'vue-toastification-for-vue3',
          title: 'Vue Toastification',
          description:
            'Light, easy and beautiful toasts for Vue.js version 3 applications.',
          link: 'https://github.com/Maronato/vue-toastification/tree/next'
        },
        {
          slug: 'bulma-modern-css-framework',
          title: 'Bulma: the modern CSS framework that just works.',
          description:
            'Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.',
          link: 'https://bulma.io/'
        }
      ]
    };
  },
  computed: {
    getActiveTabProperties() {
      switch (this.activeTab) {
        case 'ResourceList':
          return { resources: this.resources };
        default:
          return {};
      }
    }
  },
  methods: {
    createResourceItem(item) {
      this.resources.push(item);
    },
    deleteResourceItem(slug) {
      this.resources = this.resources.filter(
        resource => resource.slug !== slug
      );
    },
    switchTab(componentName) {
      this.activeTab = componentName;
    }
  }
};
</script>

<style lang="scss">
@import '~bulma';

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

body {
  font-family: 'Source Code Pro', monospace;
}
a {
  color: $primary;
}
</style>
