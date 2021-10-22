<template>
  <button class="rounded bg-primary text-white px-4 py-2">{{ text }}</button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: String,
  },
})
</script>

<style lang="postcss" scoped>
@import '../../../assets/css/tailwind.css';
</style>
