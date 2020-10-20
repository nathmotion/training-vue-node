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
  --background-color: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  --space-sm: 0.5rem;
  --border-radius-input: 6px;
  --font-size-md: 1rem;
  --font-size-lg: 1.5rem;
  --font-color: #bfbebb;
  --font-color-secondary: midnightblue;
  --font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  background: var(--background-color);
  color: var(--font-color);
  min-height: 100vh;
}

#app {
  font-family: var(--font-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 6em;
  width: 80%;
  margin: auto;
}

h1 {
  color: midnightblue;
}
</style>
