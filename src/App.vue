<template>
  <MainLayout />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from './views/MainLayout.vue'

const App = defineComponent({
  name: 'App',
  components: {
    MainLayout
  }
})
export default App
</script>

<style>
body {
  background-color: #2f302a;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 6em;
}
</style>
