<template>
  <div>
    <h1>Design system</h1>
    <h2>Atoms</h2>
    <DsTitle text="Title" />
    <DsButton text="Button" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DsButton from '~/src/design/components/button/DsButton.vue'
import DsTitle from '~/src/design/components/DsTitle.vue'

export default Vue.extend({
  components: { DsButton, DsTitle },
})
</script>
