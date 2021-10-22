<template>
  <div class="p-8">
    <h1>Home</h1>
    <p
      class="
        font-bold
        text-purple-400
        bg-white
        rounded
        p-2
        shadow-md
        border-gray-200 border
      "
    >
      {{ test }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      test: 'hello',
    }
  },
})
</script>
