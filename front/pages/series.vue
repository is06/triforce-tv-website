<template>
  <div>
    <ds-title text="Series" />
    <serie-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DsTitle from '@/src/design/components/DsTitle.vue'
import SerieList from '@/src/series/components/serieList.vue'

export default Vue.extend({
  name: 'Series',
  components: {
    DsTitle,
    SerieList,
  },
})
</script>
