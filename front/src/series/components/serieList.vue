<template>
  <div>
    <div v-for="serie in series" :key="serie.id">
      <h2>{{ serie.title }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Serie } from '../model'
import { getSeries } from '../usecases/getSeries'

interface Data {
  series: Serie[]
}

export default Vue.extend({
  name: 'SerieList',
  data(): Data {
    return {
      series: [],
    }
  },
  created() {
    this.series = getSeries()
  },
})
</script>
