<template>
  <tasks-layout />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TasksLayout from './Tasks/TasksLayout.vue'

@Options({
  components: {
    TasksLayout
  }
})
export default class MainLayout extends Vue {}
</script>

<style scoped></style>
