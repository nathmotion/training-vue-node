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
:root {
  --main-bg-color: #ffe4c4;
}

body {
  background-color: var(--main-bg-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
