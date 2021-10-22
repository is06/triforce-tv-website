<template>
  <nav>
    <nuxt-link v-for="item in items" :key="item.path" :to="item.path">{{
      item.title
    }}</nuxt-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      items: [
        { title: 'Home', path: '/' },
        { title: 'Series', path: '/series' },
        { title: 'Design System', path: '/design' },
      ],
    }
  },
})
</script>
