<template>
  <task-layout />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TaskLayout from './TaskLayout.vue'

const MainLayout = defineComponent({
  name: 'TasksLayout',
  components: {
    TaskLayout
  }
})

export default MainLayout
</script>

<style scoped></style>
