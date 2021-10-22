<template>
  <div>
    <ds-navigation />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DsNavigation from '~/src/design/components/DsNavigation.vue'

export default Vue.extend({
  components: { DsNavigation },
})
</script>
