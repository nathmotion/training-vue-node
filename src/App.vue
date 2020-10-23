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
  --background-image: linear-gradient(45deg, rgba(36, 59, 90, 0), rgba(36, 59, 90, 0.9) 80.33%),
    url('./assets/main_cover.jpg');
  --space-sm: 0.5rem;
  --border-radius-input: 6px;
  --font-size-md: 1rem;
  --font-size-lg: 1.5rem;
  --font-color: #bfbebb;
  --font-color-secondary: blanchedalmond;
  --font-family: 'Open Sans', Avenir, Helvetica, Arial, sans-serif;
}

body {
  background: var(--background-image);
  background-size: cover;
  color: var(--font-color);
  min-height: 100vh;
}

#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 6em;
  width: 80%;
  margin: auto;
}

h1 {
  color: blanchedalmond;
}
</style>
