<template>
  <h1>{{ text }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: String,
  },
})
</script>
